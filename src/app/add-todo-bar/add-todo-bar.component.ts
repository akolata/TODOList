import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  addTodoItem() {
    const todo = {
      title: this.title,
      content: this.content
    };

    this.emitter.emit(todo);

    this.title = '';
    this.content = '';
  }

}
