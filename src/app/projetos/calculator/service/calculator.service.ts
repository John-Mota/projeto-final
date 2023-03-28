/**
 *  Serviço responsavel por executar as operações da culculadora.
 * 
 * @author John Mota<johnmarcos.mota@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  /* Defien as constantes ultilizadas para indentificar as operações de calculoa */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*'

  public resultado!: number; // Armazena o resultado da operação


  constructor() { }

  /**
   * Métod que calcula uma operação matemética dado dois número.
   * 
   * Suporta as operações soma, subtração, divisão e multiplicação
   * 
   * @param num1 number
   * @param num2 number
   * @paramoperacao string Opreção a ser executada
   * @return number Resultado da operação
   */

  public calcular(num1: number, num2: number, operacao: string): number {
    

    switch(operacao) {
      case CalculatorService.SOMA:
        this.resultado = num1 + num2;
      break;
      case CalculatorService.SUBTRACAO:
        this.resultado = num1 - num2;
      break
      case CalculatorService.DIVISAO:
        this.resultado = num1 / num2;
      break
      case CalculatorService.MULTIPLICACAO:
        this.resultado = num1 * num2;
      break
      default:
        this.resultado = 0;
    }
    return this.resultado;
  }

  public insert() {

  }

  
}
