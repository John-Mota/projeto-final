import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

@Directive({
  selector: '[numero]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})
export class NumeroDirective implements ControlValueAccessor {
  
  public onTouched: any;
  public onChange: any;

  constructor( private el: ElementRef) { }

 //implementa o evento de keyup para o elemento da diretiva
 @HostListener('keyup', ['$event'])
 public onKeyUp($event: any) {
  let valor = $event.target.value;
  let posDecimais = valor.indexOf('.');

  valor = valor.replace(/[\D]/g, '')

  if(posDecimais > 0) {
      valor = valor.substr(0, posDecimais) + '.' +
      valor.substr(posDecimais)
  }

  $event.target.value = valor;
  this.onChange(valor)
 }

 // Obtém o valor contido na model.
  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }

  // Registra função a ser chamada para
  // atualizar na model
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Registra função a ser chamada para
  // atualizar na model para o evento touched.
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  
  

}
