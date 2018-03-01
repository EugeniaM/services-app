import {Component, OnInit} from '@angular/core';

import { TodosService } from './shared/services/todos.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [TodosService]
})
export class AppComponent implements OnInit {
  todos: Todo[];
  constructor(
    private todosService: TodosService
  ) {}

  ngOnInit() {
    this.todos = this.todosService.todos;
  }
}
