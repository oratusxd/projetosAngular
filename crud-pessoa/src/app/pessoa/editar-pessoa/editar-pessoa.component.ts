import { Component,ViewChild,OnInit} from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { NgForm } from '@angular/forms';
import { PessoaService } from '../services/pessoa.service';
import { ActivatedRoute,RouteConfigLoadEnd,Router } from '@angular/router';



@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  @ViewChild("formPessoa") formPessoa!: NgForm;
  pessoa!: Pessoa;
  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ){ }
  ngOnInit(): void {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    // Operador + (antes do this) converte para número
    let id = +this.route.snapshot.params['id'];
    // Com o id, obtém a pessoa
    const res = this.pessoaService.buscarPorID(id);
    if (res !== undefined){
      this.pessoa = res;
    }
    else{
      throw new Error ("Pessoa não encontrada: id = " + id);
    }
}

  atualizar () : void {
    if (this.formPessoa.form.valid) {
      this.pessoaService.atualizar(this.pessoa)
      this.router.navigate(['/pessoas'])
    }
  }
}