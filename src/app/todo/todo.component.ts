import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input() todo: Todo | undefined;

  constructor() {
  }
}