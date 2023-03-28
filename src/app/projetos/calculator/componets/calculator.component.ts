import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../service/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private number1!: string;
  private number2!: string;
  public result!: number;
  private operacao!: string;
  public displayValue = '';
  public lastOperator = ''
  constructor(private calculatorService: CalculatorService) {}


  ngOnInit(): void {
    this.limpar(); 
  }

  

  public limpar(): void {
    this.number1 = '';
    this.number2 = '';
    this.result = 0;
    this.operacao = '';
    this.displayValue = '';

   
  }

  //Adiciona o número selecionado para o cálculo posteriomente
  public insertNumber(number: string): void {
    if(this.operacao === '') {
      this.number1 = this.contactNumber(this.number1, number);
    } else {
      this.number2 = this.contactNumber(this.number2, number);
    }
    this.updateDisplay();
    
  }

  public contactNumber(currentNumber: string ='', numConcat: string = ''): string {
    // Caso contenha apesa  '0', reinicie o valor
    if(currentNumber === '0' || currentNumber === '') {
      currentNumber = '';
      console.log(`Caso contenha apesa  '0', reinicie o valor ${currentNumber}`)
    }

    //Prineiro dígito é '.', contatena'0' antes do ponto
    if(numConcat === '.' && currentNumber === '' ) {
      console.log(`Prineiro dígito é '.', contatena'0' antes do ponto ${currentNumber}`)
      console.log(`Prineiro dígito é '.', contatena'0' antes do ponto ${numConcat}`)
      return '0.';
    }

    // Caso '.' digitado e já contenha um '.', apenes retorna
    if(numConcat === '.' && currentNumber.indexOf('.') > -1) {
      console.log(`Caso '.' digitado e já contenha um '.', apenes retorna ${currentNumber}`)
      return currentNumber;
    }

    console.log(`Contatenação current = ${currentNumber} || numConcat = ${numConcat}`)
    return currentNumber + numConcat
  }

  public setOperation(operation: string): void {
    // apenas define a operação caso não exista uma
    if (this.operacao === '') {
      this.operacao = operation;
      this.updateDisplay();
    
    } else {
      /* Caso operação definida e número 2, 
      selecionado efetua o cálculo da operação */
      if (this.number2 !== '') {
        console.log(this.result)
        this.result = this.calculatorService.calcular(
          parseFloat(this.number1),
          parseFloat(this.number2),
          this.operacao);
        this.number1 = this.result.toString();
        this.operacao = operation; // atualiza a operação
        this.number2 = ''; 
      } else {
        this.operacao = operation; // atualiza a operação sem efetuar o cálculo
      }
    }
    this.updateDisplay(); // atualiza o display após a operação
  }
  
  

  // Efetua o cálculo da operação.
  public calcular(): void {
    if(this.number2 === null) {
      
    }

    this.result = this.calculatorService.calcular(
      parseFloat(this.number1),
      parseFloat(this.number2),
      this.operacao);
      this.number2 = ''
      
  }

  public back(): void {
    let resultado = document.getElementById('resultado') as HTMLInputElement;
    let str = resultado.value;
    if (str.length > 0) {
      str = str.substring(0, str.length - 1);
      resultado.value = str;
      if (this.operacao === '') {
        this.number1 = str;
      } else {
        this.number2 = str;
      }
    }
  }

  private updateDisplay(): void {
    let displayText = '';
    if (this.operacao !== '') {
      displayText = this.number1 + ' ' + this.operacao + ' ' + this.number2;
    } else {
      displayText = this.number1;
    }
    this.displayValue = displayText;
  }
  
  

  // Retorna o valor a ser exibido na tela da calculadora.

  get display(): string {
    if(this.result !== 0) {
      return this.result.toString();
    }
    if(this.number2 !== '') {
      return this.number2
    }
    return this.number1
  }

}

