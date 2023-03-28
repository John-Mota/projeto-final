import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tasks } from '../shared/tasks.model';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-register-tasks',
  templateUrl: './register-tasks.component.html',
  styleUrls: ['./register-tasks.component.css']
})
export class RegisterTasksComponent implements OnInit {
 
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  public task: Tasks;
  
  constructor(
    private taskService: TasksService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.task = new Tasks
  }

  public cadastrar(): void {
    if (this.formTarefa.form.valid) {
      this.taskService.regiser(this.task);
      this.router.navigate(["/tarefas"]);
    }
  }

}
