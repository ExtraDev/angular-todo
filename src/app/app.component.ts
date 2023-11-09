import { Component, inject } from '@angular/core';
import { TodoService } from './shared/todo.service';
import { Todo } from './shared/todo.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-todo';
  todoService = inject(TodoService)
  todos: Todo[];

  constructor() {
    this.todos = this.todoService.getTodos();
    console.log(this.todos);
  }

  todoForm = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  addTodo(): void {
    if(this.todoForm.value.name) {
      this.todoService.addTodo(this.todoForm.value.name);
      this.todos = this.todoService.getTodos();
      this.todoForm.reset();
    }
  }
}
