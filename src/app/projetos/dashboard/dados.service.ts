import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['janeiro', 33],
    ['fevereiro', 68],
    ['março', 45],
    ['abril', 15],
    ['maio', 80],
    ['junho', 27],
    

  ]

  constructor() { }

  // Retorna um Obsevable contendo os dados a serem exibidosno gráfico.
  obterDados(): Observable<any>{
    return new Observable( observable => {
      observable.next(this.dados);
      observable.complete();
    });
  }
}
