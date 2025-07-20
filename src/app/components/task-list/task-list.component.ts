import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tareas: Tarea[] = [];

  onTareaAgregada(tarea: Tarea) {
    this.tareas.push(tarea);
  }

  toggleCompletado(index: number) {
    this.tareas[index].completado = !this.tareas[index].completado;
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}