import { Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-invoice-submission',
  templateUrl: './invoice-submission.component.html',
  styleUrls: ['./invoice-submission.component.css']
})


export class InvoiceSubmissionComponent {
  @Output() jwFormDataChange = new EventEmitter<any>();
  jwFormData = {
    // Use output decorator
    item: '',
    // local reference in template
    hoursWorked: 0,
    // use view child
    hourlyRate: 0
  };

  jwSubmit() {
    this.jwFormDataChange.emit(this.jwFormData);
    this.jwFormData = {
      // Use output decorator
      item: '',
      // local reference in template
      hoursWorked: 0,
      // use view child
      hourlyRate: 0
    };
  }
}
