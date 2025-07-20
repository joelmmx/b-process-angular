import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() tarea!: Tarea;
  @Input() index!: number;

  @Output() completadoCambiado = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();

  toggleCompletado() {
    this.completadoCambiado.emit(this.index);
  }

  eliminarTarea() {
    this.eliminar.emit(this.index);
  }
}