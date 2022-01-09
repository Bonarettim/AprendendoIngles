import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent implements OnInit,OnDestroy {
  public frases: Frase[] = FRASES;
  public intrucao: string = 'Traduza a Frase';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 5;

  @Output() public  encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {}

  ngOnDestroy(){
    console.log('Componente destruido')
  }

  public autalizaReposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    // console.log(this.resposta);
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      this.rodada++;

      this.progresso = this.progresso + 100 / this.frases.length;
      console.log(this.progresso);

      if(this.rodada === 4){
        this.encerrarJogo.emit('Vitoria')
      }

      this.atualizaRodada();
    } else {
      this.tentativas--

      if(this.tentativas === -1){
        this.encerrarJogo.emit('Derrota')
      }
    }
  }
  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
