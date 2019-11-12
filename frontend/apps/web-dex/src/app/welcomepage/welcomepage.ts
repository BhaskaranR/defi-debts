import { Component, Output, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { UalService } from 'ual-ngx-material-renderer';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'dex-welcomepage',
  templateUrl: './welcomepage.html',
  styleUrls: ['./welcomepage.scss']
})
// tslint:disable-next-line: component-class-suffix
export class Welcomepage implements OnInit, OnDestroy {
  // isNextVersion = location.hostname.startsWith('next.material.angular.io');
  private unsubscribe$ = new Subject()
  constructor(
    private router: Router,
    private ualService: UalService) {
     }

    ngOnInit() {
      this.ualService.users$.pipe(takeUntil(this.unsubscribe$)).subscribe(val => {
        if (val !== null && val.length > 0) {
          this.router.navigate(['./dashboard'])
        } 
      });
    }

    ngOnDestroy() {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
}
