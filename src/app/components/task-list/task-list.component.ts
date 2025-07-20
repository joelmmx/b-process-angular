import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tareas = this.taskService.getTareas();
  }

  onTareaAgregada(descripcion: string) {
    this.taskService.agregarTarea(descripcion);
  }

  toggleCompletado(index: number) {
    this.taskService.toggleCompletado(index);
  }

  eliminarTarea(index: number) {
    this.taskService.eliminarTarea(index);
  }
}