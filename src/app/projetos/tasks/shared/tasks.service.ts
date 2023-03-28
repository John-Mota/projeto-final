import { Injectable } from '@angular/core';

import { Tasks } from './tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  public listAll(): Tasks[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  public regiser(task: Tasks): void {
    const tasks = this.listAll();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tarefas'] = JSON.stringify(tasks);
  }

  public searchById(id: number): Tasks {
    const tasks: Tasks[] = this.listAll();
    return tasks.find(task => task.id === id);
  }

  public toUpdate(task: Tasks): void {
    const tasks: Tasks[] = this.listAll();
    tasks.forEach((obj, index, objs) => {
      if (task.id === obj.id) {
        objs[index] = task;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tasks);
  }

  public remove(id: number): void {
    let tasks: Tasks[] = this.listAll();
    tasks = tasks.filter(task => task.id !== id);
    localStorage['tarefas'] = JSON.stringify(tasks);
  }

  public changeStatus(id: number): void {
    const tasks: Tasks[] = this.listAll();
    tasks.forEach((obj, index, objs) => {
      objs[index].concluida = !obj.concluida;
    });
    localStorage['tarefas'] = JSON.stringify(tasks);
  }
}
