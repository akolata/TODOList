import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoBarComponent } from './add-todo-bar/add-todo-bar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TodoGridComponent } from './todo-grid/todo-grid.component';
import { TodoService } from './services/todo.service';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    AddTodoBarComponent,
    NavigationBarComponent,
    TodoGridComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: TodoService,
      useClass: TodoService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
