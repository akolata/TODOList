import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  todos = [
    {
      title: 'Title1',
      content: 'Content1'
    },
    {
      title: 'Title2',
      content: 'Content2'
    },
    {
      title: 'Title3',
      content: 'Content3'
    },
    {
      title: 'Title4',
      content: 'Content4'
    },
    {
      title: 'Title5',
      content: 'Content5'
    }
  ];

  constructor() { }

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    const item = {
      title: todo.title,
      content: todo.content
    };

    this.todos.push(item);
  }

  deleteTodo(todo) {
      this.todos.splice(
        this.todos.findIndex(
          (td) => td.title === todo.title && td.content === todo.content)
        , 1);
  }
}
