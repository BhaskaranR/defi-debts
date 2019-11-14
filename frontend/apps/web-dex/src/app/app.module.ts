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
  MatIconModule,
  MatListModule,
  MatMenuModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./nav/nav.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UalModule, UalService } from 'ual-ngx-material-renderer';
import { Chain } from 'universal-authenticator-library';
import { Scatter } from 'ual-scatter';
import { EOSIOAuth } from 'ual-eosio-reference-authenticator';

import { ServiceWorkerModule } from '@angular/service-worker';
import {AuthGuard} from './auth.guard';
import { Welcomepage } from "./welcomepage/welcomepage";
import { environment } from '@dex-env';
import { SvgViewerModule } from './svg-viewer/svg-viewer';
import { DashboardComponent } from "./dashboard/dashboard.component";

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
  declarations: [AppComponent, NavBarComponent, Welcomepage, DashboardComponent],
  imports: [
    BrowserModule,
    SvgViewerModule,
    NxModule.forRoot(),
    UalModule.forRoot({
      chains: [chain],
      authenticators: [scatter, eosioAuth],
      appName
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
   // ApiModule,
    FlexLayoutModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
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
          canActivate:[AuthGuard]
        }, 
        {
          path:"welcome",
          component:Welcomepage
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
