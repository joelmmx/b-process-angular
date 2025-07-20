import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tareas: Tarea[] = [];

  getTareas(): Tarea[] {
    return this.tareas;
  }

  agregarTarea(descripcion: string): void {
    const nuevaTarea: Tarea = {
      descripcion,
      completado: false
    };
    this.tareas.push(nuevaTarea);
  }

  toggleCompletado(index: number): void {
    this.tareas[index].completado = !this.tareas[index].completado;
  }

  eliminarTarea(index: number): void {
    this.tareas.splice(index, 1);
  }
}