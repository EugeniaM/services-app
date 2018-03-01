import {EventEmitter, Injectable} from '@angular/core';

import { LoggingService } from './logging.service';

@Injectable()
export class TodosService {
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
  statusChanged = new EventEmitter<string>();

  constructor(
    private loggingService: LoggingService
  ) { }

  addTodo(title: string, status: string) {
    this.todos.push({ title, status });
    this.loggingService.logStatus(status);
  }

  changeTodoStatus(id: number, newStatus: string ) {
    this.todos[id].status = newStatus;
    this.loggingService.logStatus(newStatus);
  }
}
