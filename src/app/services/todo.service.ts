import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Subject, Observable } from 'rxjs';

@Injectable()
export class TodoService {

  urlFindAllTodoNotes = 'http://localhost:8080/todos';
  urlAddTodoNote = 'http://localhost:8080/todos/add';
  todos = [];

  constructor(private http: Http) {
  }

  addTodo(todo) {
    const headers = new Headers({'Content-Type': 'application/json'});

    this.http.post(this.urlAddTodoNote, JSON.stringify(todo), {headers: headers}).subscribe((response: Response) => {
      console.log(response); // TODO - display message
    });
  }

  deleteTodo(todo) {
    // TODO - use server to delete note by id
      this.todos.splice(
        this.todos.findIndex(
          (td) => td.title === todo.title && td.content === todo.content)
        , 1);
  }

  getTodosFromServer(callback) {

    this.http.get(this.urlFindAllTodoNotes)
      .subscribe((response: Response) => {
        const responseData = response.json();
        this.todos = responseData;

        callback(this.todos);
      });

  }

  getTodos(callback) {
    this.getTodosFromServer(callback);
  }

}
