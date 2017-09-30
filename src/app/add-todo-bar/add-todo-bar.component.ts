import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add-todo-bar',
  templateUrl: './add-todo-bar.component.html',
  styleUrls: ['./add-todo-bar.component.css']
})
export class AddTodoBarComponent implements OnInit {

  title: string;
  content: string;

  // tslint:disable-next-line:no-output-rename
  @Output('addTodo')
  emitter = new EventEmitter();

  constructor(private todoService: TodoService) {
    this.title = '';
    this.content = '';
  }

  ngOnInit() {
  }

  addTodoItem() {

    if (this.title === '') {
      return;
    }

    const todo = {
      title: this.title,
      content: this.content
    };

    // this.emitter.emit(todo);

    if (todo !== undefined) {
      this.todoService.addTodo(todo);
    }

    this.title = '';
    this.content = '';
  }

}
