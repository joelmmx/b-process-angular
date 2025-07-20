import { Component } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  titulo = 'Lista de tareas';
  nuevaTarea = '';
  tareas: Tarea[] = [];

  agregarTarea() {
  if (this.nuevaTarea.trim()) {
    this.tareas.push({
      descripcion: this.nuevaTarea.trim(),
      completado: false
    });
    this.nuevaTarea = '';
  }
}

  toggleTareaCompletada(index: number) {
    this.tareas[index].completado = !this.tareas[index].completado;
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}