import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: any = [];
  newTodo: string = '';
  counter = 0;

  addText() {
    if (this.newTodo.trim() !== '') {
      this.todos.push(this.newTodo);
    }
    this.newTodo = '';
    this.counter = this.todos.length;
  }

  remove(i: any) {
    this.todos.splice(i, 1);
    this.counter = this.todos.length;
  }
}
