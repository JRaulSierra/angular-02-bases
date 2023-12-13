import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DbzModule} from "./dbz/dbz.module";
import {GiffModule} from "./giff-app/giff/giff.module";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./giff-app/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    DbzModule,
    GiffModule,
    SharedModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
