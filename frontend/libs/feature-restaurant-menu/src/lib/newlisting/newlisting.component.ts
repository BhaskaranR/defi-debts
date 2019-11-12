import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { MatStepper, MatButtonToggleChange, MatSnackBar } from '@angular/material';
import { MenuService } from '../services/menu.service';
import { Section } from '../model/section';
import { Item } from '../model/item';
import * as moment from 'moment';
import { SearchTransactionsForwardGQL } from '../generated/graphql';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from 'environments/dex/environment';

@Component({
  selector: 'dex-newlisting',
  templateUrl: './newlisting.component.html',
  styleUrls: ['./newlisting.component.scss']
})
export class NewlistingComponent implements OnInit, OnDestroy {

  get formArray(): AbstractControl | null { return this.pricingForm.get('formArray'); }

  constructor(
    private fb: FormBuilder,
    public menuService: MenuService,
    public snackBar: MatSnackBar,
    private searchTransactionsForwardGQL: SearchTransactionsForwardGQL) { }


  sections: Section[];
  selectedSection: Section;
  selectedSections: Section[];

  items: Item[];
  selectedItems: Item[];
  selectedItem: Item;

  isNonLinear = false;
  isNonEditable = false;
  pricetype = 1;
  stepper: MatStepper;

  priceHeader = "Enter pricing information";
  isReady = false;
  unSubscription$: Subject<any> = new Subject();

  dynamicPricingValidator: { [key: string]: any[] } = {
    "list_type": [1, Validators.required],
    "isactive": [true, Validators.required],
    "list_price": [null, Validators.required],
    "min_price": [null, Validators.required],
    "quantity": [null, Validators.required],
    "start_date": [{ value: '' }, Validators.required],
    "start_time": [{ value: '' }, Validators.required],
    "end_date": [null, Validators.required],
    "end_time": [null, Validators.required],
    "sliding_rate": [null, Validators.required]
  };

  sideValidator: { [key: string]: any[] } = {
    "item_name": [null, Validators.required],
    "list_price": [null, Validators.required]
  };

  bookAndSectionForm: FormGroup = this.fb.group({
    "section": [null, Validators.required],
  });

  itemForm: FormGroup = this.fb.group({
    "item": [null, Validators.required],
  })

  dynamicPricingForm: FormGroup = this.fb.group(this.dynamicPricingValidator);

  sidesForm: FormGroup = this.fb.group({
    "side_groups": this.fb.array([])
  });

  pricingForm: FormGroup = this.fb.group({
    formArray: this.fb.array([
      this.bookAndSectionForm,
      this.itemForm,
      this.dynamicPricingForm,
      this.sidesForm
    ])
  });


  createSideGroup() {
    const itemGroup = (<FormArray>this.pricingForm.get("formArray")).controls[3] as FormGroup;
    const groups = itemGroup.get("side_groups") as FormArray;
    groups.push(this.fb.group({
      "max_selection": [null, Validators.required],
      "group": [null, Validators.required],
      "sides": this.fb.array([this.fb.group(this.sideValidator)])
    }));
  }

  createItemSide(indx) {
    const itemGroup = (<FormArray>this.pricingForm.get("formArray")).controls[3] as FormGroup;
    const groups = itemGroup.get("side_groups") as FormArray;
    const item = groups.controls[indx] as FormGroup;
    (<FormArray>item.get("sides")).push(this.fb.group(this.sideValidator));
  }

  deleteItemGroup(index) {
    const itemGroup = (<FormArray>this.pricingForm.get("formArray")).controls[3] as FormGroup;
    const groups = itemGroup.get("side_groups") as FormArray;
    groups.removeAt(index);
  }

  deleteItemSide(grpIndx, indx) {
    const itemGroup = (<FormArray>this.pricingForm.get("formArray")).controls[3] as FormGroup;
    const groups = itemGroup.get("side_groups") as FormArray;
    const item = groups.controls[grpIndx] as FormGroup;
    (<FormArray>item.get("sides")).removeAt(indx);
  }

  formatLabel(value: number | null) {
    return (value / 100) + "%";
  }


  async ngOnInit() {
    this.sections = await this.menuService.getMySections();
    this.items = await this.menuService.getMyItems();

    const accountName = await this.menuService.getAccountName();

    const sub = this.searchTransactionsForwardGQL
      .subscribe({
        "query": `receiver:${environment.CONTRACT_NAME} auth:${accountName} status:executed  db.table:sec/${environment.CONTRACT_NAME}`,
      })
      .pipe(takeUntil(this.unSubscription$))
      .subscribe(this.updateHandler.bind(this));

    this.isReady = true;
  }

  private updateHandler(update) {
    console.log('update ? ', update);
  }

  onSectionChange(evt, stepper: MatStepper) {
    this.selectedItems = this.items;
    if (!this.stepper) {
      this.stepper = stepper;
    }
    stepper.next();
  }

  listItemSelected(item: Item, stepper: MatStepper) {
    (<FormArray>this.pricingForm.get("formArray")).controls[1].get("item").setValue(item);
    this.selectedItem = item;
    this.priceTypeChanged({ value: this.selectedSection.section_name === "kmeal" ? 0 : 1 } as any);
    stepper.next();
  }

  priceTypeChanged($event: MatButtonToggleChange) {
    (<FormArray>this.pricingForm.get("formArray")).controls[2].get("list_type").setValue($event.value);
    const fb: FormGroup = <FormGroup>(<FormArray>this.pricingForm.get("formArray")).controls[2];
    if ($event.value !== 1) {
      Object.keys(this.dynamicPricingValidator).forEach(key => {
        fb.controls[key].setValidators(this.dynamicPricingValidator[key][1]);
        fb.controls[key].updateValueAndValidity();
      });
    } else {
      Object.keys(this.dynamicPricingValidator).forEach(key => {
        fb.controls[key].setValidators(null);
        fb.controls[key].updateValueAndValidity();
      });

      fb.controls['list_price'].setValidators(this.dynamicPricingValidator['list_price'][1]);
      fb.controls['list_price'].updateValueAndValidity();
    }
    this.pricetype = Number($event.value);
  }

  async onSubmit(form) {
    if (!this.pricingForm.valid) {
      return;
    }

    const listType = Number((<FormArray>this.pricingForm.get('formArray')).controls[2].get('list_type').value);
    const sectionId = this.selectedSection.section_id;
    const itemId = this.selectedItem.item_id;
    const listPrice = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('list_price').value;
    const sides = this.generateSidesJson();

    let minPrice = 0,
      qty = 0,
      slidingRate = 0,
      stdate =0,
      expires = 0;


    if (listType === 0) {
      minPrice = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('min_price').value;
      qty = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('quantity').value;
      slidingRate = ((<FormArray>this.pricingForm.get('formArray')).controls[2].get('sliding_rate').value) / 100;
      const startDate = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('start_date').value;
      const startTime = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('start_time').value;

      const endDate = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('end_date').value;
      const endTime = (<FormArray>this.pricingForm.get('formArray')).controls[2].get('end_time').value;

        // tslint:disable-next-line: radix
        stdate =  parseInt(this.dateDiff(new Date(), this.convertDate(startDate, startTime)).toString());
      // tslint:disable-next-line: radix
        expires = parseInt(this.dateDiff(this.convertDate(startDate, startTime), this.convertDate(endDate, endTime)).toString()); 
    }


    try {
      const reps = await this.menuService.createListing(
        itemId,
        sectionId,
        listType,
        listPrice,
        minPrice,
        qty,
        stdate,
        expires,
        slidingRate,
        sides);
      this.openSnackBar('Created listing', "");
      this.resetForm();
      this.formArray['controls'].forEach(form => {
        form.markAsPristine();
        form.markAsUntouched();
      })
    }
    catch (e) {
      this.openSnackBar(e, "");
    }

  }

  resetForm() {
    this.pricingForm.reset();
    this.pricingForm.markAsUntouched();
    this.stepper.reset();
  }

  private convertDate(date, time) {
    time =  moment(time, "h:mm:ss A").format("HH:mm:ss");
    return moment(moment(date).format('MM/DD/YYYY') + ' ' + time);
  }

  private dateDiff(startdate, date) {
    const duration = moment.duration(date.diff(startdate));
    return duration.asSeconds();
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  private generateSidesJson() {
    let sides = (<FormArray>this.pricingForm.get('formArray')).controls[3].get('side_groups').value;
    sides = sides.map(s => JSON.stringify(s));
    return sides;
  }

  ngOnDestroy() {
    this.unSubscription$.next();
    this.unSubscription$.complete();
  }
}
