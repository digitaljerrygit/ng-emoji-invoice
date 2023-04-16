import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  jwFormData: any = {};

  jwHoursWorked = 0;
  jwClientInfo = {
    name: "Emoji Web Design, Inc",
    address: {
      unit: 12345,
      road: "Sunny Road",
      city: "Sunnyville",
      state: "TX",
      zipCode: "12345"
    },
    invoiceNumber: "123456789",
    invoiceDate: this.jwGetCurrentDate(),
    invoiceItems: [
      {
        item: "Web Design",
        hoursWorked: 20,
        hourlyRate: 50,
      },
      {
        item: "Web Development",
        hoursWorked: 100,
        hourlyRate: 75
      },
      {
        item: "Project Management",
        hoursWorked: 12,
        hourlyRate: 55.30
      }
    ],
    paymentType: "Cash",
    taxAmount: 13
  }

  jwUpdateFormData(formData: any) {
    this.jwFormData = formData;
    this.jwClientInfo.invoiceItems.push(formData);
  }

  jwSelectedOption = 'Cash';

  jwChangePaymentType() {
    this.jwClientInfo.paymentType = this.jwSelectedOption;
  }

  jwGetCurrentDate() {
    const jwDate = new Date();
    return `${jwDate.getMonth() + 1}/${jwDate.getDate()}/${jwDate.getFullYear()}`;
  }

  jwToDollarFormat(amt: number): string {
    const jwRoundedAmt = amt.toFixed(2);
    return jwRoundedAmt;
  }
}
