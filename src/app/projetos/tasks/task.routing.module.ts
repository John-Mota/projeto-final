import { Routes } from '@angular/router';
import { TodoListComponent } from './list/todo-list.component'; 
 
export const TasksRoutes: Routes = [
	{ 
		path: 'task', 
		component: TodoListComponent 
	}
];