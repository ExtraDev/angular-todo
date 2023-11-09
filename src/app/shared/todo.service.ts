import { Inject, Injectable } from "@angular/core";
import { Todo } from "./todo.model";
import { TODOS } from "./todo.seed";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todos: Todo[] = TODOS

    getTodos(): Todo[] {
        return this.todos;
    }

    addTodo(name: string): void {
        this.todos.push({
            id: this.todos.length,
            name: name, 
            description: '',
            status: false
        })
    }
}