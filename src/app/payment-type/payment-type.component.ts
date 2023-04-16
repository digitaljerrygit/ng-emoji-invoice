import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.css']
})
export class PaymentTypeComponent {
  @Output() jwPaymentTypeChange = new EventEmitter<string>();
  jwSelectedPaymentType = 'Cash';
  jwPaymentTypes = ['Cash', 'Credit Card', 'BitCoin', 'Interact'];

  jwSubmit() {
    this.jwPaymentTypeChange.emit(this.jwSelectedPaymentType);
  }
}
