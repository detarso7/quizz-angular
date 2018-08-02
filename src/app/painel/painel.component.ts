import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {Frases} from "../shared/frases.model"
import {FRASES} from "./frases-mock"

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frases[] = FRASES;
  public instrucao:string = "Traduza a frase"
  public resposta:string = ""

  public rodada:number = 0
  public rodadaFrase:Frases
  public _progresso:number = 0
  public tentativas:number = 3
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
      this.atualizarRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(_resposta: Event): void{
    this.resposta = (<HTMLInputElement>_resposta.target).value;
        //console.log(this.resposta)
  }

  public verificaResposta(): void{

    if(this.rodadaFrase.frasePtBr === this.resposta){

      //Incremente os indices da rodada
      this.rodada++
      //Incrementa a barra de progresso
      this._progresso = this._progresso + (100 / this.frases.length)
      //Vitória da Partida
      if(this.rodada === 4){
        this.encerrarJogo.emit("v")
      }
      //Troca as fraases
      this.atualizarRodada()
      //Limpar textarea
      this.resposta = ""

    }else{

      this.resposta = ""
      this.tentativas--

      if(this.tentativas === -1){
        this.encerrarJogo.emit("d")
      }

    }

  }

  public atualizarRodada(): void{
    //Troca as fraases
    this.rodadaFrase = this.frases[this.rodada]
    //Limpar textarea
    this.resposta = ""
  }

}
