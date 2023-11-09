import { Component, inject } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './shared/todo.service';
import { Todo } from './shared/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo';
  todoService = inject(TodoService)
  todos: Todo[];

  constructor(){
    this.todos = this.todoService.getTodos();
    console.log(this.todos);
  }
}
