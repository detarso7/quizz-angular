import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento:boolean = true
  public tipoEncerrar:string

  public encerrarJogo(tipo: string): void{
    this.jogoEmAndamento = false
    this.tipoEncerrar = tipo
  }

  public iniciarJogo(){
    this.jogoEmAndamento = true
    this.tipoEncerrar = undefined
  }
}
