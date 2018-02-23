import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() todoAdded = new EventEmitter<{title: string, status: string}>()

  onAddTodo(todoTitle: string, todoStatus: string) {
    this.todoAdded.emit({
      title: todoTitle,
      status: todoStatus
    });
    console.log(`TODO status was changed. New status: ${todoStatus}`);
  }
}
