import { Component, inject, signal } from "@angular/core";
import { TodoApi, TodoService } from "../service/todo.service";
import { Todo } from "../model/todo";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule]

})
export class TodoComponent {
  todoService = inject(TodoService);
  todos = this.todoService.getTodos();
  todo = signal<Todo>(new Todo());
  todosApis = signal<TodoApi[]>([]);
  constructor() {
    this.todoService.getTodosFromApi().subscribe({
      next: (todosApi) => {
        this.todosApis.set(todosApi);
      },
      error: (e) => {
        console.log(e);
      }
    })
  }
  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
