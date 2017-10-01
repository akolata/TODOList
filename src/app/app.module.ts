import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoBarComponent } from './add-todo-bar/add-todo-bar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TodoGridComponent } from './todo-grid/todo-grid.component';
import { TodoService } from './services/todo.service';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routesConfig: Routes = [
  {path: '', redirectTo: 'add', pathMatch: 'full'},
  {path: 'add', component: AddTodoBarComponent},
  {path: 'search', component: SearchBarComponent},
  {path: '**', redirectTo: 'add', pathMatch: 'full'}
];

const routerModule = RouterModule.forRoot(routesConfig, {
  enableTracing: true,
  useHash: true
});

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
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routerModule
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
