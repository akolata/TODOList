import { TodoService } from '../services/todo.service';
import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  private MODE_DISPLAY = 'display';
  private MODE_EDITION = 'edit';

  @Input()
  title: string;

  @Input()
  content: string;

  titleBeforeEdition: string;
  contentBeforeEdition: string;

  mode: string;

  constructor(private todoService: TodoService) {
    this.titleBeforeEdition = this.title;
    this.contentBeforeEdition = this.content;
    this.mode = this.MODE_DISPLAY;
   }

  ngOnInit() {
  }

  delete() {
    // this.todoService.deleteTodo(this);
  }

  edit() {
    this.mode = this.MODE_EDITION;

    this.titleBeforeEdition = this.title;
    this.contentBeforeEdition = this.content;
  }

  save() {
    this.mode = this.MODE_DISPLAY;

    if (this.title === '' || this.title === ' ') {
      this.cancelEdition();
      return;
    }

    this.todoService.updateTodo(this);
  }

  cancelEdition() {
    this.title = this.titleBeforeEdition;
    this.content = this.contentBeforeEdition;
    this.mode = this.MODE_DISPLAY;
  }

}
