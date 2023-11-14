import { Component, Input, OnInit, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../shared/todo.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  todoIsDone = signal(false);

  constructor() {}

  ngOnInit(): void {
    this.todoIsDone.set(this.todo.status)
  }

  toggleTodo() {
    this.todoIsDone.set(!this.todoIsDone())
  }
}
