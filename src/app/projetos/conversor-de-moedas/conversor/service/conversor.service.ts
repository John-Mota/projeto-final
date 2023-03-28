import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Conversao } from '../models/conversao.model';
import { ConversaoResponse } from '../models/conversaoResponse.model';


@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private API_KEY: string = 'xaBM9gQSpONNRrdd1esErJ3PNyH8uz7e';
  private readonly BASE_URL: string = "https://api.frankfurter.app/latest";
  //http://api.fixer.io/latest
  //https://api.frankfurter.app/latest?amount=12&from=USD&to=BRL

  constructor( private http: HttpClient) { }

  // Realiza a chamada para a API de conversão de moedas.
  converter(conversao: Conversao): Observable<ConversaoResponse> {
    const params = `?base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;

    return this.http
      .get<ConversaoResponse>(this.BASE_URL + params);
  }

  // Retorna a cotação para dado uma response.
  public cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao): number  {
    if (conversaoResponse === undefined) {
      return 0;
    }

    return conversaoResponse.rates[conversao.moedaPara];
  }

  // Retorna a cotação de dado uma response.
  public contacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string {
    if (conversaoResponse === undefined) {
      return '0'
    }

    return(1 / conversaoResponse.rates[conversao.moedaPara])
    .toFixed(4);
  }

  // Retorna a data da cotação dado uma response.
  public dataCotacao(conversorResponse: ConversaoResponse): string {
    if(conversorResponse === undefined) {
      return '';
    }

    return conversorResponse.date;
  }
}
