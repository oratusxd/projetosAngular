import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa.model';

const LS_CHAVE : string = "pessoas";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }
 
  listaTodos(): Pessoa [] {
    const pessoas = localStorage [LS_CHAVE]
    // Precisa do condional, pois undefined se a chave não existe
    return pessoas ? JSON.parse(pessoas) : []
    
  }

  inserir(pessoa:Pessoa):void {
    const pessoas = this.listaTodos()
    pessoa.id = new Date().getTime()
    pessoas.push(pessoa)
    localStorage[LS_CHAVE] = JSON.stringify(pessoas)
  }

  buscarPorID(id:number): Pessoa | undefined {
    const pessoas:Pessoa[]= this.listaTodos()
    return pessoas.find(pessoa => pessoa.id === id) // find procura o primeiro elemento da array que satisfaz a condição -> se não retorna undefined
  }
  
  atualizar (pessoa:Pessoa):void {
    const pessoas : Pessoa []= this.listaTodos()
    pessoas.forEach( (obj, index, objs) => {
      if (pessoa.id === obj.id) {
        objs[index] = pessoa
      }
      });
  }
  remover (id: number): void {
    let pessoas: Pessoa []= this.listaTodos()
    pessoas = pessoas.filter(pessoa => pessoa.id !==id)

    localStorage[LS_CHAVE] = JSON.stringify(pessoas)
  }
}
