import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = signal<Task[]>([]);
  public allTasks = this.tasks.asReadonly();

  public add( taskData: { title: string, description: string } ) {
    const newTask: Task = {
      id: Math.random().toString(36).substring(0, 10),
      title: taskData.title,
      description: taskData.description,
      status: 'OPEN'
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

}