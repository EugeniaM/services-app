import { Component, Input } from '@angular/core';

// import { LoggingService } from '../shared/services/logging.service';
import { TodosService } from '../shared/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: {title: string, status: string};
  @Input() id: number;

  constructor(
    private todosService: TodosService
  ) { }

  onSetNewStatus(todoStatus: string) {
    this.todosService.changeTodoStatus(this.id, todoStatus);
    this.todosService.statusChanged.emit(todoStatus);
    // this.loggingService.logStatus(todoStatus);
  }
}
