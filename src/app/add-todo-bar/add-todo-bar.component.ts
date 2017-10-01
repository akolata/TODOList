import { Component, OnInit, Inject } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add-todo-bar',
  templateUrl: './add-todo-bar.component.html',
  styleUrls: ['./add-todo-bar.component.css']
})
export class AddTodoBarComponent implements OnInit {

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.searchAllTodos();
  }

  addTodoItem(title, content) {

    const todo = {
      title: title,
      content: content
    };

    if (this.isTodoValid(todo)) {
      this.todoService.addTodo(todo);
    }

  }

  isTodoValid(todo) {
    if (todo.title != null && todo.title !== '') {
      return true;
    }
    return false;
  }
}
