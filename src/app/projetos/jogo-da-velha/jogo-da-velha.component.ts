import { Component } from '@angular/core';
import { JogoDaVelhaService } from './shared/jogo-da-velha.service';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent {
  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit() {
  	this.jogoDaVelhaService.inicializar();
  }

  
   // Retorna se a tela de início deve ser exibida.
  
  get showInicio(): boolean {
  	return this.jogoDaVelhaService.showInicio;
  }

 
   // Retorna se o tabuleiro deve ser exibido.
   
  get showTabuleiro(): boolean {
  	return this.jogoDaVelhaService.showTabuleiro;
  }

  
   // Retorna se a tela de fim de jogo deve ser exibida.
   
  get showFinal(): boolean {
  	return this.jogoDaVelhaService.showFinal;
  }

  
   // Inicializa os dados de um novo jogo.
   
  public iniciarJogo($event: any): void {
    $event.preventDefault();
  	this.jogoDaVelhaService.iniciarJogo();
  }

  
  //  Realiza uma jogada ao clicar um local no tabuleiro.
   
  public jogar(posX: number, posY: number): void {
  	this.jogoDaVelhaService.jogar(posX, posY);
    console.log(`aqui posição X: ${posX} : posição Y: ${posY}`)
  }

  
   // Retorna se a peça X deve ser exibida para a 
   
  public exibirX(posX: number, posY: number): boolean {
  	return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  
   // Retorna se a peça O deve ser exibida para a coordena informada.
   
   
  public exibirO(posX: number, posY: number): boolean {
  	return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  
   // Retorna se a marcação de vitória deve ser exibida para a coordena informada.
   
   
  public exibirVitoria(posX: number, posY: number): boolean {
  	return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

 
   // Retorna o número do jogador a jogar.
   
  get jogador(): number {
  	return this.jogoDaVelhaService.jogador;
  }

  
  // Inicia um novo jogo.
   
  public novoJogo($event): void {
    $event.preventDefault();
  	this.jogoDaVelhaService.novoJogo();
  }
}
