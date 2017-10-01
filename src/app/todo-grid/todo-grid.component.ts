import { Component, OnInit, Inject } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-grid',
  templateUrl: './todo-grid.component.html',
  styleUrls: ['./todo-grid.component.css']
})
export class TodoGridComponent implements OnInit {

  todoItems;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoItems = this.todoService.getTodoItemsStream();
    this.todoService.searchAllTodos();
  }

}
