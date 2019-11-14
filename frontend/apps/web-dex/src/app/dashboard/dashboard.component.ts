import { Component, Output, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { UalService } from 'ual-ngx-material-renderer';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'dex-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
// tslint:disable-next-line: component-class-suffix
export class DashboardComponent implements OnInit, OnDestroy {
  // isNextVersion = location.hostname.startsWith('next.material.angular.io');
  private unsubscribe$ = new Subject()
  constructor(
    private router: Router,
    private ualService: UalService) {
     }

    ngOnInit() {

    }

    ngOnDestroy() {
  
    }
}