import { Component, OnInit } from '@angular/core';
import { Tasks } from '../shared/tasks.model';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: Tasks[];

  constructor(private tasksService: TasksService) {

  }
  ngOnInit(): void {
    this.tasks = this.lisarTodos()
    
  }

  public lisarTodos(): Tasks[] {
    return this.tasksService.listAll()
  }

  public remover($event: any, tasks: Tasks): void {
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa "' + tasks.nome + '"?')) {
      this.tasksService.remove(tasks.id);
      this.tasks = this.lisarTodos();
    }
  }

  public alterarStatus(task: Tasks): void {
    //complete
    if(confirm('Deseja alterar a tarefa "' + task.nome + '"?')) {
      this.tasksService.changeStatus(task.id);
      this.tasks = this.lisarTodos();
    }
  }
}
