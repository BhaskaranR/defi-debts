import { Component, OnDestroy, OnInit} from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatSnackBar, MatDialog } from "@angular/material";
import { MenuService } from "../services/menu.service";
import { SearchTransactionsForwardGQL } from "../generated/graphql";
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { environment } from "environments/dex/environment";

@Component({
  selector: "dex-newmenu",
  templateUrl: "./newmenu.component.html",
  styleUrls: ["./newmenu.component.scss"]
})
export class NewmenuComponent implements OnInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    public  snackBar: MatSnackBar,
    private menuService: MenuService,
    private searchTransactionsForwardGQL: SearchTransactionsForwardGQL,
    public  dialog: MatDialog,) { }

  get itemName() {
    return this.menuForm.get("itemName").value;
  }

  get description() {
    return this.menuForm.get("description").value;
  }

  get photo() {
    return this.menuForm.get("photo").value;
  }

  get spicyLevel() {
    if (this.menuForm.get("spicy_level").value === "0") return;
    return this.menuForm.get("spicy_level").value;
  }
  
  get vegetarian() {
    if (this.menuForm.get("vegetarian").value === 3) return;
    const idx = this.menuForm.get("vegetarian").value;
    return this.CONST_VEGETARIAN[idx];
  }

  get cookingTime() {
    return this.menuForm.get("cooking_time").value;
  }

  get spicyLevelDisplay(){
    if (!this.spicyLevel) return ;
    return this.spicyLevelConsts[this.spicyLevel]
  }


  isFormSubmitted = false;
  isReady = false;
  isEditing = false;
  newItemId        : number;

  menuForm         : FormGroup = this.fb.group({
    itemName       : [null, Validators.required],
    description    : [null, Validators.required],
    photo          : null,
    spicy_level    : 0,
    vegetarian     : 3,
    cooking_time   : [null, Validators.required]
  });

  CONST_VEGETARIAN : any = {
    3:'Other',
    2:'Vegetarian',
    1:'Vegan'
  }

  unSubscription$ = new Subject();

  spicyLevelConsts = {
    0:'',
    1:'Mild Spicy',
    2:'Medium Spicy',
    3:'Hot'
  }

  async ngOnInit() {
    const accountName = await this.menuService.getAccountName();
    const sub = this.searchTransactionsForwardGQL.subscribe({
      "query": `receiver:${environment.CONTRACT_NAME} auth:${accountName} status:executed  db.table:items/${environment.CONTRACT_NAME}`,
    })
    .pipe(takeUntil(this.unSubscription$))
    .subscribe(this.updateHandler.bind(this));
    this.isReady = true;
  }

  private updateHandler(update){
    console.log('update ? ', update);
    if (this.isFormSubmitted){
      this.newItemId = update.data.searchTransactionsForward.trace.matchingActions[0].dbOps[0].newJSON.object.item_id;
    }
  }


  setInitialDetails() {

  }

  onSubmit() {
    if (this.isEditing) {
      if (this.newItemId) {
        this.onEdit();
      }
    } else {
      this.onCreate();
    } 
  }

  async onCreate(){
    try{
      const resp = await this.menuService.createItem(
        this.menuForm.get('itemName').value, 
        this.menuForm.get('description').value, 
        this.menuForm.get('photo').value || 'random string', 
        this.menuForm.get('spicy_level').value,
        Number(this.menuForm.get('vegetarian').value),
        this.menuForm.get('cooking_time').value,
        []);

      this.openSnackBar('Created new item',"");
      this.isFormSubmitted = true;

    }catch(e){
      this.openSnackBar('ERROR creating menu ' +  e, "");
    } 
  }

  async onEdit(){
    try{
      const resp = await this.menuService.editItem(
        this.newItemId,
        this.menuForm.get('itemName').value,
        this.menuForm.get('description').value,
        this.menuForm.get('photo').value || 'random string', 
        this.menuForm.get('spicy_level').value,
        Number(this.menuForm.get('vegetarian').value),
        this.menuForm.get('cooking_time').value,
        []);
        
        this.openSnackBar('Saved this item',"");
        this.isFormSubmitted = true;
    } catch(e){
      this.openSnackBar(e,'');
    }
  }

  async onDeleteItem() {
    try{
       const resp = await this.menuService.deleteItem(this.newItemId);
       this.isFormSubmitted = false;
       this.menuForm.reset();
       this.menuForm.markAsPristine();
    }catch(e){
      this.openSnackBar('Syetem failed to delete this item','');
    }
  }

  editItem(){
    this.isFormSubmitted = false;
    this.isEditing = true;
  }

  formatSpicyLevel(val){
    const SPICY = {
      0:'',
      1:'Mild Spicy',
      2:'Medium Spicy',
      3:'Hot'
    }
    return SPICY[val];
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000,
    });
  }

  ngOnDestroy(){
    this.unSubscription$.next();
    this.unSubscription$.complete();
  }
}
