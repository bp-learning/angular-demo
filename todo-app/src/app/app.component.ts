import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  taskDescription: string = '';
  taskList: string[] = [];

  addTask() {
    console.log(this.taskDescription)
    this.taskList.push(this.taskDescription);
    this.taskDescription = '';
    console.log(this.taskList);
  }


}
