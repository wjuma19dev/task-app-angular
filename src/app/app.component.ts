import { Component } from '@angular/core';

import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from "./tasks/tasks-list/tasks-list.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [TasksComponent],
})
export class AppComponent {}
