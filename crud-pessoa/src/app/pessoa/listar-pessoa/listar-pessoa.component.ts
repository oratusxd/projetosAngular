import { Component,OnInit,Input } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from 'src/app/shared/models/pessoa.model';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})

export class ListarPessoaComponent implements OnInit{
  pessoas: Pessoa [] = []
  constructor(private pessoaService: PessoaService){ }

  ngOnInit(): void {
    this.pessoas = this.listarTodos()
  }
  listarTodos(): Pessoa[ ] {
 // return this.pessoaService.listaTodos()
    return [
      new Pessoa(1,"Utaro",24),
      new Pessoa(2,"Nicolas",24),
      new Pessoa(3,"Guilherme",27),
      new Pessoa(4,"Brunna",19)];
}
}
