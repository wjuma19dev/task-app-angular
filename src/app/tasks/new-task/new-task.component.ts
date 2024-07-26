import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {

  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private tasksService: TaskService = inject(TaskService);

  onAddTask(title: string, description: string) {
    this.tasksService.add({ title, description });
    this.formEl()?.nativeElement.reset();
  }
}
