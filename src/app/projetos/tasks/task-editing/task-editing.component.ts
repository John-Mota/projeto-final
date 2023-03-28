import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from '../shared/tasks.model';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-task-editing',
  templateUrl: './task-editing.component.html',
  styleUrls: ['./task-editing.component.css']
})
export class TaskEditingComponent {

  
  @ViewChild('formTarefa') formTarefa: NgForm;
  task: Tasks;

  constructor(
    private tarefaService: TasksService,
  	private route: ActivatedRoute,
  	private router: Router) {}

  ngOnInit() {
  	const id = +this.route.snapshot.params['id'];
	  this.task = this.tarefaService.searchById(id);
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) {
	    this.tarefaService.toUpdate(this.task);
	    this.router.navigate(['/tarefas']);
    }
  }

}
