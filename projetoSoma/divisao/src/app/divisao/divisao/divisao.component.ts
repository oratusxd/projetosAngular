import { Component,OnInit } from '@angular/core';
import { DivisaoService } from '../services';

@Component({
  selector: 'app-divisao',
  templateUrl: './divisao.component.html',
  styleUrls: ['./divisao.component.css']
})
export class DivisaoComponent implements OnInit{
private res: number = 0;
  constructor(private divisaoService:DivisaoService){

}
ngOnInit(): void {
  
}
dividir (numero1: string, numero2:string): void{
  let n1: number
  let n2:number
  n1 = parseFloat(numero1)
  n2 = parseFloat(numero2)
  this.res = this.divisaoService.dividir(n1,n2)
}
get resultado(): string{
  return this.res.toString();
}

}
