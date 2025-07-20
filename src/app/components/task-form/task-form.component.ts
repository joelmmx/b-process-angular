import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task: string = '';  // <- This fixes [(ngModel)]="task"

  @Output() tareaAgregada = new EventEmitter<string>();

  onSubmit() {
    if (this.task.trim()) {
      this.tareaAgregada.emit(this.task.trim());
      this.task = '';
    }
  }
}