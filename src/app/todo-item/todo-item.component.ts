import { TodoService } from '../services/todo.service';
import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';

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

  // tslint:disable-next-line:no-output-rename
  @Output('deleteTodo')
  emitter = new EventEmitter();

  constructor(private todoService: TodoService) {
    this.titleBeforeEdition = this.title;
    this.contentBeforeEdition = this.content;
    this.mode = this.MODE_DISPLAY;
   }

  ngOnInit() {
  }

  delete() {
    this.emitter.emit(this);
  }

  edit() {
    this.mode = this.MODE_EDITION;

    this.titleBeforeEdition = this.title;
    this.contentBeforeEdition = this.content;
  }

  save() {
    this.mode = this.MODE_DISPLAY;

    if (this.title === '') {
      this.cancelEdition();
    }
  }

  cancelEdition() {
    this.title = this.titleBeforeEdition;
    this.content = this.contentBeforeEdition;
    this.mode = this.MODE_DISPLAY;
  }

}
