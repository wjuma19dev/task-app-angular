import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TaskService } from './app/tasks/task.service';

import { InjectionToken } from '@angular/core';

// REVIEW https://v17.angular.io/api/core/InjectionToken
export const tasksTokenService = new InjectionToken<TaskService>('tasks-service-token');


bootstrapApplication(
  AppComponent,
  {
    providers: [{
      provide: tasksTokenService,
      useClass: TaskService,
      multi: false,
      deps: []
    }]
  }
).catch((err) => console.error(err));
