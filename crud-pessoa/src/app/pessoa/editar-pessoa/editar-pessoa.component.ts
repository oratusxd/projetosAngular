import { Component,ViewChild,OnInit} from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { NgForm } from '@angular/forms';
import { PessoaService } from '../services/pessoa.service';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


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
  ){

  }
  ngOnInit(): void {
    
  }
}