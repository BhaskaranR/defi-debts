import { Component, Output, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { UalService } from 'ual-ngx-material-renderer';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Chart } from 'angular-highcharts';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { DashboarService } from './dashboard.services';

@Component({
  selector: 'dex-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
// tslint:disable-next-line: component-class-suffix
export class DashboardComponent implements OnInit, OnDestroy {

  // isNextVersion = location.hostname.startsWith('next.material.angular.io');

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3],
        type:null
      }
    ]
  });

  columnDefs = [
      {headerName: 'Make',  field: 'make',  width:80 },
      {headerName: 'Model', field: 'model', width:80 },
      {headerName: 'Price', field: 'price', width:80 }
  ];

  rowData = [
      { make: 'Toyota',  model: 'Celica', price: 35000 },
      { make: 'Ford',    model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  modules = AllCommunityModules;

  private unsubscribe$ = new Subject();
  user:any;
  accountName:any;
  isReady: boolean = false;

  constructor(
    private router: Router,
    private ualService: UalService,private dashboarService:DashboarService) {
     }

    ngOnInit() {
      this.ualService.users$.subscribe(async val => {
        if (val !== null && val.length > 0) {
          this.user =  val[val.length - 1];
          this.accountName = await this.user.getAccountName();
          this.isReady = true;

          this.readData();
        } else {
          this.user = null;
          this.accountName = '';
          this.isReady = true;
        }
      });
    }

    ngOnDestroy() {
  
    }

    data:any;
    private async readData(){
      this.data = await this.dashboarService.readDbonds();
      console.log(this.data);
    }

    bondSelected:any;
    quantity:string;
    buy(){
      this.dashboarService.buyBond(this.bondSelected,this.quantity);
    }
}