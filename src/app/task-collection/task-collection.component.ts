import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-collection',
  templateUrl: './task-collection.component.html',
  styleUrls: ['./task-collection.component.css']
})
export class TaskCollectionComponent {
  @Input() jwItems: any;
}
