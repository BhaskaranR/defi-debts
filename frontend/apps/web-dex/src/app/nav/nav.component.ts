import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { SECTIONS, PROFILESECTION } from '../menu-items/menu-items';

import { Network } from "scatterjs-core";
import { Router, ActivatedRoute } from '@angular/router';
import { UalService } from "ual-ngx-material-renderer";

const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
  selector: "dex-nav-bar",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavBarComponent implements OnInit {
  dia: any;
  isLoggedIn = true;
  isSideNavOpen = false;
  @Output() toggleSidenavEvent: EventEmitter<boolean> = new EventEmitter();
  _sections = SECTIONS;
  _sectionKeys = SECTIONS_KEYS;

  get sections() {                  
    return this._sections;
  }

  get sectionKeys() {
    return this._sectionKeys;
  }

  user:any;
  accountName:any;

  constructor(
    private router: Router,
    private ualService: UalService) { }

  ngOnInit() {
   this.ualService.users$.subscribe(async val => {
    if (val !== null && val.length > 0) {
      this.user =  val[val.length - 1];
      this.accountName = await this.user.getAccountName();
    } else {
      this.user = null;
      this.accountName = '';
    }
  });
  }

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
    this.toggleSidenavEvent.emit(this.isSideNavOpen);
  }


  onLoginClick() {
    this.ualService.showModal();
  }

  addProfileNav() {
    this._sections = Object.assign(this.sections , PROFILESECTION)
    this._sectionKeys =[...this._sectionKeys, ...Object.keys(PROFILESECTION)]
  }

  viewAccount() {
    this.router.navigate(['profile/profile'])
  }

  async onLogoutClick() {
    this.ualService.logoutUser();
    this.router.navigate(['/welcome'])
  }
}
