import { Component, OnInit, OnDestroy } from "@angular/core";
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar, MatDialog } from "@angular/material";
import { MenuService } from "../services/menu.service";
import { Section } from "../model/section";
import { SearchTransactionsForwardGQL } from '../generated/graphql';
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { environment } from "environments/dex/environment";

@Component({
  selector: "dex-newsection",
  templateUrl: "./newsection.component.html",
  styleUrls: ["./newsection.component.scss"]
})
export class NewsectionComponent implements OnInit, OnDestroy {

  unSubscription$ = new Subject();

  sectionsForm = this.fb.group({
    section: [null, Validators.required]
  });

  sections: Section[];
  selectedSections: Section[];
  isReady = false;

  constructor(
    public dialog: MatDialog,
    private menuService: MenuService,
    private searchTransactionsForwardGQL: SearchTransactionsForwardGQL,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
  }

  async ngOnInit() {
    const accountName = await this.menuService.getAccountName();

    this.sections = await this.menuService.getMySections();
    this.selectedSections = this.sections;
    
    const sub = this.searchTransactionsForwardGQL
    .subscribe({
       "query": `receiver:${environment.CONTRACT_NAME} auth:${accountName} status:executed  db.table:sec/${environment.CONTRACT_NAME}`,
    })
    .pipe(takeUntil(this.unSubscription$))
    .subscribe(this.updateHandler.bind(this));

    this.isReady = true;
  }

  private updateHandler(update){
    console.log('update ?! ', update);
  }

  async dropSections(evt: CdkDragDrop<Section[]>) {
    
  }

  async onSectionsSubmit() {
    try {
      const resp = await this.menuService.addSection(this.sectionsForm.get('section').value);
      const newSec = new Section();
      newSec.section_name = this.sectionsForm.get('section').value;
      newSec.section_id   = this.sections[this.sections.length-1].section_id + 1;
      newSec.is_active    = 1;
      this.selectedSections.push(newSec);
      this.sections.push(newSec);
      this.sectionsForm.get('menubook').setValue(null);
      this.sectionsForm.get('section').setValue(null);
      this.openSnackBar('new section created',"");
    }
    catch (e) {
      this.openSnackBar(e, '');
    }
  }


  async callContactToDeleteSection(id){
    // const sec = this.sections.find(s => s.section_id === id);
    // if(sec.items.length > 0){
    //   this.openSnackBar('Failed to delete this section as it has items in it','');
    //   return ;
    // }

    // let book;
    // if (!this.selectedMenuBook){
    //   book = this.menubooks.find(b => b.sections.includes(id));
    // }

    // try {
    //   const resp = await this.menuService.deleteSection(this.selectedMenuBook? this.selectedMenuBook.book_id : book.book_id, id);
    //   this.sections = this.sections.filter(sec => sec.section_id !== id); 
    //   this.selectedSections = this.sections.filter(sec => this.selectedMenuBook.sections.includes(sec.section_id) && sec.section_id !== id );
    //   this.sectionsForm.get('section').setValue(null);
    //   this.sectionsForm.get('menubook').setValue(null);
    //   this.openSnackBar('Deleted',"");
    // }
    // catch (e) {
    //   this.openSnackBar(e, '');
    // }
  }


  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnDestroy() {
    this.unSubscription$.next();
    this.unSubscription$.complete();
  }
}
