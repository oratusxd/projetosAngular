import { NgModule,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { MultiplicacaoComponent } from './multiplicacao/multiplicacao.component';
import { MultiplicacaoService } from './services';


@NgModule({
  declarations: [
    MultiplicacaoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports :[
    MultiplicacaoComponent
  ],
  providers :[
    MultiplicacaoService
  ]
})
export class MultiplicacaoModule implements OnInit {
  constructor (private multiplicacaoService:MultiplicacaoService){}
  ngOnInit(): void {
    
  }
 }
