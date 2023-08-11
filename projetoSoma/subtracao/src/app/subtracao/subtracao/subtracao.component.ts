import { Component,OnInit } from '@angular/core';
import { SubtracaoService } from '../services';

@Component({
  selector: 'app-subtracao',
  templateUrl: './subtracao.component.html',
  styleUrls: ['./subtracao.component.css']
})
export class SubtracaoComponent implements OnInit {
  private res : number = 0;
  constructor(private subtracaoService:SubtracaoService){}
  ngOnInit(): void {
    
  }
  subtrair(numero1:string,numero2:string): void {
    let n1 :number;
    let n2 :number;
    n1 = parseFloat (numero1)
    n2 = parseFloat(numero2)
    this.res = this.subtracaoService.subtrair(n1,n2)
  }
  get resultado () : string {
    return this.res.toString()
  }

}
