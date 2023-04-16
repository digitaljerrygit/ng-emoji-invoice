import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InvoiceSubmissionComponent } from './invoice-submission/invoice-submission.component';
import { HeaderComponent } from './header/header.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { TaskCollectionComponent } from './task-collection/task-collection.component';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceSubmissionComponent,
    HeaderComponent,
    PaymentTypeComponent,
    TaskCollectionComponent,
    InvoiceSummaryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
