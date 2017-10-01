import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Subject, Observable } from 'rxjs';

@Injectable()
export class TodoService {

  todoItems = [];
  todosStream = new Subject<any[]>();


  constructor(private http: Http) {
  }

  addTodo(todo) {
    const urlAddTodoNote = 'http://localhost:8080/api/todo/add';
    const headers = new Headers({'Content-Type': 'application/json'});

    this.http.post(urlAddTodoNote, JSON.stringify(todo), {headers: headers})
    .subscribe((response: Response) => {
      console.log(response); // TODO - display message
      this.searchAllTodos();
    });

  }

  updateTodo(todo) {
    const urlUpdateTodoNote = 'http://localhost:8080/api/todo/update';
    const headers = new Headers({'Content-Type': 'application/json'});

    console.log(todo);

    this.http.post(urlUpdateTodoNote, JSON.stringify(todo), {headers: headers})
    .subscribe((response: Response) => {
      console.log(response); // TODO - display message
      this.searchAllTodos();
    });

  }

  deleteTodo(todoId) {
    const urlDeleteTodoNote = 'http://localhost:8080/api/todo/delete?id=';

    this.http.delete(urlDeleteTodoNote + todoId)
    .subscribe((response: Response) => {
      console.log(response);
      this.searchAllTodos(); // TODO display message
    });

  }

  searchTodoItemsByTitle(title) {
    const urlSearchByTitle = 'http://localhost:8080/api/todo/search?title=';

    this.http.get(urlSearchByTitle + title)
    .map((response: Response) => {
      return response.json();
    })
    .do(todoItemsFromServer => {
      this.todoItems = todoItemsFromServer;
    })
    .subscribe((todoItems) => {
      this.todosStream.next(this.todoItems);
    });
  }

  searchAllTodos() {
    const urlFindAllTodoNotes = 'http://localhost:8080/api/todo/all';

    this.http.get(urlFindAllTodoNotes)
    .map((response: Response) => {
      return response.json();
    }).do( todoItemsFromServer => {
      this.todoItems = todoItemsFromServer;
    }).subscribe((response: Response) => {
      this.todosStream.next(this.todoItems);
    });
  }

  getTodoItemsStream() {
    return Observable.from(this.todosStream).startWith(this.todoItems);
  }
}
