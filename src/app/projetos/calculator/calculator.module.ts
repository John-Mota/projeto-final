import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './componets/calculator.component';
import { CalculatorService } from './service/calculator.service';



@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculatorComponent
  ],
  providers: [
    CalculatorService
  ]
})
export class CalculatorModule { }
