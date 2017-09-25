import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  title: string;

  constructor() {
    this.title = '';
   }

  ngOnInit() {
  }

  searchForTodoItemsByTitle() {

    if (this.title !== '') {
     console.log(this.title);
    }

  }
}
