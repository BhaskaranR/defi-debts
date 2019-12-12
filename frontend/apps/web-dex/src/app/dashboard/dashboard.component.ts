import { Component, OnInit, OnDestroy } from '@angular/core';
import { UalService } from 'ual-ngx-material-renderer';
import { Chart} from 'angular-highcharts';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { DashboarService } from './dashboard.services';
import { OfferDetailPopupComponent } from './offerDetailPopup.component';
import { FormBuilder, Validators } from '@angular/forms';
import {theme} from './highchart.theme';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as moment from 'moment';

interface IOffer {
  id:string;
  currPrice:string;
  initPrice:string;
  payoffPrice:string;
  maturity:string;
  qty:string;
}

interface IChart {
  name:string,
  data:number[],
  type:string | null
}

@Component({
  selector: 'snack-bar',
  template:"Something went wrong!",
})
export class ErrorComponent {}



@Component({
  selector: 'dex-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {


  chartOptions = {
    chart: {
      type: 'line',
      height:300,
    },
    credits: {
      enabled: false
    },
    series: []
  }

  chart = new Chart(Object.assign({},this.chartOptions, theme));

  offerColumnDefs = [
      {headerName: 'Action',        field: null,            width:80,   cellRenderer: 'OfferDetailPopupComponent', },
      {headerName: 'Bond Id',       field: 'id',            width:120 },
      {headerName: 'Current Price', field: 'currPrice',     width:120 },
      {headerName: 'Initial Price', field: 'initPrice',     width:120 },
      {headerName: 'Payoff Price',  field: 'payoffPrice',   width:120 },
      {headerName: 'Maturity Time', field: 'maturityTime',  width:160 ,  filter: "agDateColumnFilter",},
      {headerName: 'Qty to Issue',  field: 'quantity',      width:120 },
  ];

  defaultColDef = {
    width:120,
    resizable: true,
    filter:true
  }

  public onSelectionChanged(e){
    this.bondSelected = e.api.getSelectedRows()[0];
  }

  offerApi:any;
  offerGridColumnApi:any;
  public onOfferGridReady(params){
    this.offerApi = params.api;
    this.offerGridColumnApi = params.columnApi;
  }

  offerData : any[];

  blotterColumnDefs = [
    {headerName: 'Action', cellRenderer: 'OfferDetailPopupComponent', width:80},
    {headerName: 'Bond Id',  field: 'id',  width:120 },
    {headerName: 'Current Price', field: 'currPrice', width:120 },
    {headerName: 'Initial Price', field: 'initPrice', width:120 },
    {headerName: 'Payoff Price', field: 'payoffPrice', width:120 },
    {headerName: 'Maturity Time', field:'maturity',width:120, filter: "agDateColumnFilter",},
    {headerName: 'Qty', field:'qty',width:120},
];

  blotterData : any[] = [];

  modules = AllCommunityModules;
  frameworkComponents : {[key:string]:any} = {OfferDetailPopupComponent: OfferDetailPopupComponent}

  user:any;
  accountName:any;
  isReady: boolean = false;

  buyForm = this.fb.group({
    amount: ['', Validators.required]
  });


  constructor(
    private ualService: UalService,
    private dashboarService:DashboarService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder) {}

    ngOnInit() {

      this.ualService.users$.subscribe(async val => {
        if (val !== null && val.length > 0) {
          this.user =  val[val.length - 1];
          this.accountName = await this.user.getAccountName();

          await this.readData();
           if (this.offerData.length == 0) {
             this._snackBar.open('no data available');
             return;
           }
          this.generateChartData(this.offerData);

          this.isReady = true;
          this.getBlotterData();
        } else {
          this.user = null;
          this.accountName = '';
          this.isReady = true;
        }
      });
    }

    ngOnDestroy() {}

    gridApi:any;
    onGridReady(params){
      this.gridApi = params.api;
    }

    private async readData(){
      const data = await this.dashboarService.readDbonds();
      console.log(data);
      this.offerData = data.map((d) => {
        return {
          id:           d.dbond.dbond_id,
          currPrice:    d.current_price.quantity,
          initPrice:    d.initial_price.quantity,
          payoffPrice:  d.dbond.payoff_price.quantity,
          maturityTime: d.dbond.maturity_time,
          quantity:     d.dbond.quantity_to_issue,
          apr:          d.dbond.apr
        }
      });
    }

    bondSelected:any;
    async onBuy(){
      
      const result = await this.dashboarService.buyBond(this.buyForm.value.amount);
      console.log(result);
    }


    async getBlotterData(){
      let timer;
      try{
        const data = await this.readBlotter();
        if (!!data && data.length > 0 ){
          this.gridApi.setRowData(data);
        }
        console.log('blotter : ', this.blotterData);
        timer = setTimeout(() =>{
          this.getBlotterData();
        }, 2000);
      }
      catch(e){
        clearTimeout(timer);
        this._snackBar.openFromComponent(ErrorComponent, {
          duration: 2000,
        });
      }
    }

    private async readBlotter(){
      return await this.dashboarService.getOrders();
    }

    private generateChartData(data){

      data.forEach((r) => {
        
        let daysDiff = moment(r.maturityTime).diff(moment(),'days');
        let sInYear = 365;
        let currPrice = 0;

        if (daysDiff > 0) {
          let b = parseFloat(r.payoffPrice.replace('  BONDB',''));
          currPrice = b / (1.00 + r.apr / 1e4 * daysDiff / sInYear);
        }

        let xDays = Number(daysDiff/4);
        let splits = r.currPrice.split(' ');
        let basePrice = parseFloat(splits[0]);

        let data = [
          [moment(new Date()).format('MM/DD/YYYY'), basePrice],
          [moment(new Date()).add(xDays, 'days').format('MM/DD/YYYY'), (basePrice + currPrice) ],
          [moment(new Date()).add(xDays * 2, 'days').format('MM/DD/YYYY'), (basePrice+ currPrice * 2 ) ],
          [moment(new Date()).add(xDays * 3, 'days').format('MM/DD/YYYY'), (basePrice + currPrice * 3) ],
          [moment(new Date()).add(xDays * 4, 'days').format('MM/DD/YYYY'), (basePrice + currPrice * 4) ],
        ]
        
        let series = {
          name: r.id,
          data:data,
          type:null,
        };

        console.log(series);
        this.chartOptions.series.push(series);
        
      });

    }
}