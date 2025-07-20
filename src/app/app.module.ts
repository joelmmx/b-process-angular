import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TareasComponent } from './tareas/tareas.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    TaskFormComponent,
    TaskListComponent
  ],
  imports: [BrowserModule, FormsModule, TaskItemComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}