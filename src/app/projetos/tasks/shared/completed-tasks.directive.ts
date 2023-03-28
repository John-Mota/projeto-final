import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[completedTasks]'
})
export class CompletedTasksDirective implements OnInit {
  @Input() completedTasks: boolean;

  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    if(this.completedTasks) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
