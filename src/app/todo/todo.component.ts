import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: {title: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  onSetNewStatus(todoStatus: string) {
    this.statusChanged.emit({ id: this.id, newStatus: todoStatus });
    console.log(`TODO status was changed. New status: ${todoStatus}`);
  }
}
