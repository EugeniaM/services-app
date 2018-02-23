import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [
    {
      title: 'Learn Angular',
      status: 'in progress'
    },
    {
      title: 'Buy a car',
      status: 'new'
    },
    {
      title: 'Buy a cat',
      status: 'done'
    }
  ];

  onTodoAdded(todo: { title: string, status: string }) {
    this.todos.push(todo);
  }

  onStatusChanged(updateData: { id: number, newStatus: string }) {
    this.todos[updateData.id].status = updateData.newStatus;
  }
}
