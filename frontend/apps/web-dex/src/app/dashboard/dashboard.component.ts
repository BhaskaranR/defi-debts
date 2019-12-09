import { Component, Output, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { UalService } from 'ual-ngx-material-renderer';
import { Chart} from 'angular-highcharts';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { DashboarService } from './dashboard.services';
import { OfferDetailPopupComponent } from './offerDetailPopup.component';
import { FormBuilder, Validators } from '@angular/forms';
import {theme} from './highchart.theme';

interface IOffer {
  id:string;
  currPrice:string;
  initPrice:string;
  payoffPrice:string;
  maturity:string;
  qty:string;
}

@Component({
  selector: 'dex-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
// tslint:disable-next-line: component-class-suffix
export class DashboardComponent implements OnInit, OnDestroy {

  // isNextVersion = location.hostname.startsWith('next.material.angular.io');
  chartOptions = {
    chart: {
      type: 'line',
      height:300,
    },
    title: {
      text: 'Offering'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'DBOND',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        type:null
    }, {
        name: 'BlackRock',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        type:null
    }, {
        name: 'JP Morgan',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        type:null
    }, {
        name: 'Morgan Chase',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
        type:null
    }, {
        name: 'UnitedHealdcare',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
        type:null
    }
    ]
  }

  chart = new Chart(Object.assign({}, this.chartOptions,theme));

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
    console.log(this.bondSelected);
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
    private fb: FormBuilder) {}

    ngOnInit() {
      console.log(this.chart);
      this.ualService.users$.subscribe(async val => {
        if (val !== null && val.length > 0) {
          this.user =  val[val.length - 1];
          this.accountName = await this.user.getAccountName();
          await this.readData();
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

    private async readData(){
      const data = await this.dashboarService.readDbonds();
      this.offerData = data.map((d) => {

        return {
          id:           d.dbond.dbond_id,
          currPrice:    d.current_price.quantity,
          initPrice:    d.initial_price.quantity,
          payoffPrice:  d.dbond.payoff_price.quantity,
          maturityTime: d.dbond.maturity_time,
          quantity:     d.dbond.quantity_to_issue
        }
      });
    }

    bondSelected:any;
    async onBuy(){
      const result = await this.dashboarService.buyBond(this.bondSelected,this.buyForm.value.amount);
      console.log(result);
    }


    async getBlotterData(){
      let timer;
      try{
        this.blotterData = await this.readBlotter();
        console.log('blotter : ', this.blotterData);
        timer = setTimeout(() =>{
          this.getBlotterData();
        }, 2000);
      }
      catch(e){
        clearTimeout(timer);
        console.error('something just happened');
      }
    }

    private async readBlotter(){
      return await this.dashboarService.getOrders();
    }
}