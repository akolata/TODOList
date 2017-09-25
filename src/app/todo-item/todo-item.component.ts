import { TodoService } from '../services/todo.service';
import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  content: string;

  // tslint:disable-next-line:no-output-rename
  @Output('deleteTodo')
  emitter = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  delete() {
    this.emitter.emit(this);
  }

}
