import { Component, OnInit, Inject } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add-todo-bar',
  templateUrl: './add-todo-bar.component.html',
  styleUrls: ['./add-todo-bar.component.css']
})
export class AddTodoBarComponent implements OnInit {

  title: string;
  content: string;

  constructor(private todoService: TodoService) {
    this.title = '';
    this.content = '';
  }

  ngOnInit() {
  }

  addTodoItem() {

    if (!this.isTodoValid()) {
      return;
    }

    const todo = {
      title: this.title,
      content: this.content
    };

    this.todoService.addTodo(todo);

    this.title = '';
    this.content = '';
  }

  isTodoValid() {
    if (this.title != null && this.title !== '') {
      return true;
    }
    return false;
  }
}
