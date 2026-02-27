import { inject, Injectable, Signal, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "../../service/logger.service";
import { HttpClient } from "@angular/common/http";
import { APP_API } from "../../config/app-api.config";
import { Observable } from "rxjs";

export interface TodoApi {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  protected readonly todos = signal<Todo[]>([]);
  logger = inject(LoggerService);
  http = inject(HttpClient);
  /**
   * elle retourne le signal de la liste des todos
   *
   * @returns Signal<Todo[]>
   */
  getTodos(): Signal<Todo[]> {
    return this.todos.asReadonly();
  }

  getTodosFromApi(): Observable<TodoApi[]> {
    return this.http.get<TodoApi[]>(APP_API.todo)
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    this.todos.update((todos) => [...todos, todo]);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
    const oldTodosLength = this.todos().length;
    this.todos.update((todos) => {
      return todos.filter((actualTodo) => actualTodo != todo);
    });
    return oldTodosLength != this.todos().length;
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    this.logger.log(this.todos());
  }
}
