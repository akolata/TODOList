import { Component, OnInit, Injectable } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  searchForTodoItemsByTitle(title) {
    this.todoService.searchTodoItemsByTitle(title);
  }
}
