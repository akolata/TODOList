import { Component, OnInit, Inject } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-grid',
  templateUrl: './todo-grid.component.html',
  styleUrls: ['./todo-grid.component.css']
})
export class TodoGridComponent implements OnInit {

  todos;

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  ngOnInit() {
  }

  add(todo) {
    if (todo !== undefined && todo !== '') {
      this.todoService.addTodo(todo);
    }
  }

  delete(todo) {
    if (todo != null) {
      this.todoService.deleteTodo(todo);
    }
  }
}
