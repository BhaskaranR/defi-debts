import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";

import { AppComponent } from "./app.component";
import { NxModule } from "@nrwl/nx";
import { ApiModule } from "./graphql.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatCardModule
} from "@angular/material";
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./nav/nav.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UalModule, UalService } from 'ual-ngx-material-renderer';
import { Chain } from 'universal-authenticator-library';
import { Scatter } from 'ual-scatter';
import { EOSIOAuth } from 'ual-eosio-reference-authenticator';
import { ChartModule } from 'angular-highcharts';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthGuard } from './auth.guard';
import { environment } from '@dex-env';
import { SvgViewerModule } from './svg-viewer/svg-viewer';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AgGridModule } from '@ag-grid-community/angular';


const appName = 'BlokTrading';
const chain: Chain = {
  chainId: environment.CHAIN_ID,
  rpcEndpoints: [{
    protocol: environment.RPC_PROTOCOL,
    host: environment.RPC_HOST,
    port: environment.RPC_PORT
  }]
};

export function init_ual(ualservice: UalService) {
  return () =>  new Promise((resolve, reject) => {
    if (ualservice.loginStatus$.value && !ualservice.loginStatus$.value.loading) {
      resolve();
      return;
    }
    ualservice.loginStatus$.subscribe(val => {
      if (!val.loading) {
        resolve();
      }
    }, (err) => {
      reject(err);
    });
  });
}

// const lynx = new Lynx([exampleNet])
// const ledger = new Ledger([exampleNet])
const scatter = new Scatter([chain], {appName});
const eosioAuth = new EOSIOAuth([chain], { appName, protocol: 'eosio' });


@NgModule({
  declarations: [AppComponent, NavBarComponent, DashboardComponent],
  imports: [
    BrowserModule,
    SvgViewerModule,
    NxModule.forRoot(),
    UalModule.forRoot({
      chains: [chain],
      authenticators: [scatter, eosioAuth],
      appName
    }),
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    AgGridModule.withComponents([]),
   // ApiModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    ChartModule,
    MatInputModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          redirectTo: "/dashboard",
          pathMatch: "full"
        },
        {
          path: "dashboard",
          component:DashboardComponent,
        }
      ],
      { paramsInheritanceStrategy: "always" }
    ),
    BrowserAnimationsModule,
    LayoutModule
  ],
  bootstrap: [AppComponent],
  providers:[
    { provide: APP_INITIALIZER, useFactory: init_ual, deps: [UalService], multi: true },
    AuthGuard]
})
export class AppModule { }
