import { Component,OnInit } from '@angular/core';
import { MultiplicacaoService } from '../services';

@Component({
  selector: 'app-multiplicacao',
  templateUrl: './multiplicacao.component.html',
  styleUrls: ['./multiplicacao.component.css']
})
export class MultiplicacaoComponent {
  private res : number = 0
  constructor(private multiplicacaoService:MultiplicacaoService ) {}
  ngOnInit():void{ }
  multiplicar(numero1:string,numero2:string):void{
    let n1:number;
    let n2:number;
    n1 = parseFloat(numero1)
    n2 = parseFloat(numero2)
    this.res = this.multiplicacaoService.multiplicar(n1,n2);
  }
  get resultado (): string{
    return this.res.toString()
  }
}
