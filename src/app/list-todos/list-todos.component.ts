import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

  todos = [
    new Todo('Learn to Dance',false,new Date()),
    new Todo('Expert in Java',true,new Date()),
    new Todo('Expert in Angular',false,new Date())
  ]
}
