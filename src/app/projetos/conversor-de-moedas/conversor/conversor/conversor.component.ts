import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';


import { Moeda } from '../models/moedas.model';
import { Conversao } from '../models/conversao.model';
import { ConversaoResponse } from '../models/conversaoResponse.model';
import { MoedaService } from '../service/moeda.service';
import { ConversorService } from '../service/conversor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  public moeda: Moeda[];
  public conversao: Conversao;
  public conversaoResponse: ConversaoResponse;
  public possuiError: boolean;
  public name: string = 'Olá'

  @ViewChild("conversaoForm") conversaoForm: NgForm
  
  constructor (
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) {}
  
  ngOnInit(): void {
    this.moeda = this.moedaService.listarTodas();
    this.init();
  }

  


  // Efetua a chamada para a conversão de valores.
  public init(): void {
    this.conversao = new Conversao('USD', 'BRL', null);
    this.possuiError = false;
  }

  // Efetuando a chamada para conversão de valores
  public converter(): void {
    if (this.conversaoForm.form.valid) {
      this.conversorService
      .converter(this.conversao)
      .subscribe({
        next: (response) => {
          this.conversaoResponse = response
        },
        error: (error) => {
          this.possuiError = true
        }
      })
    }
  }

}
