import {Component, OnInit} from '@angular/core';
// import { LoggingService } from '../shared/services/logging.service';
import { TodosService } from '../shared/services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  statusFromTodoComponent: string;

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit() {
    this.todosService.statusChanged.subscribe(
      (status: string) => {
        this.statusFromTodoComponent = status;
      }
    );
  }

  onAddTodo(todoTitle: string, todoStatus: string) {
    this.todosService.addTodo(todoTitle, todoStatus);
    // this.loggingService.logStatus(todoStatus);
  }
}
