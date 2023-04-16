import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.css']
})
export class InvoiceSummaryComponent {
  @Input() jwClientData: any;

  jwToDollarFormat(amt: number): string {
    const jwRoundedAmt = amt.toFixed(2);
    return jwRoundedAmt;
  }

  jwCalculateTotalHours() {
    const jwAllHoursWorked = this.jwClientData.invoiceItems.map((item: { hoursWorked: any; }) => {
      return item.hoursWorked;
    });
    const jwTotaled = jwAllHoursWorked.reduce((a: any, b: any) => a + b);
    return jwTotaled;
  }

  jwCalculateSubTotal() {
    const jwAllTotals = this.jwClientData.invoiceItems.map((item: { hoursWorked: number; hourlyRate: number; }) => {
      return item.hoursWorked * item.hourlyRate;
    });
    const jwSum = jwAllTotals.reduce((a: any, b: any) => a + b);
    return jwSum;
  }

  jwCalculateTaxes() {
    const jwTaxed = this.jwCalculateSubTotal() * (this.jwClientData.taxAmount / 100);
    return this.jwToDollarFormat(jwTaxed);
  }

  jwCalculatePaymentTotal() {
    const jwAllTotals = this.jwClientData.invoiceItems.map((item: { hoursWorked: number; hourlyRate: number; }) => {
      return item.hoursWorked * item.hourlyRate;
    });
    const jwSum = jwAllTotals.reduce((a: any, b: any) => a + b);
    const jwTaxed = this.jwCalculateSubTotal() * (this.jwClientData.taxAmount / 100);
    return this.jwToDollarFormat(jwSum + jwTaxed);
  }
}
