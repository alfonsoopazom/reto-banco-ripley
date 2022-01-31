import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_ROUTING} from "./config/page-routes";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './pages/body/body.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AddresseeFormComponent } from './pages/addressee-form/addressee-form.component';
import { TransactionHistoryComponent } from './pages/transaction-history/transaction-history.component';
import { TransactionFormComponent } from './pages/transaction-form/transaction-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AddresseeFormComponent,
    TransactionHistoryComponent,
    TransactionFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    APP_ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
