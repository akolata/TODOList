import { Component, OnInit, Injectable } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private todoService: TodoService) {
    this.searchForm = new FormGroup({
      'title': new FormControl('Type title here')
    });

    this.searchForm.get('title').valueChanges
    .filter(title => title.length >= 1)
    .distinctUntilChanged()
    .debounceTime(400)
    .subscribe(title => {
      this.todoService.searchTodoItemsByTitle(title);
    });
  }

  ngOnInit() {
  }
}
