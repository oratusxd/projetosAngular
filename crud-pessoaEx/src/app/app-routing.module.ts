import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './LoginComponent/LoginComponent';
import { ListarPessoaComponent } from './pessoa/listar-pessoa/listar-pessoa.component';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',
  redirectTo: 'pessoas/listar',
  pathMatch: 'full' },
  { path: 'pessoas',
  redirectTo: 'pessoas/listar' },
  { path: 'pessoas/listar',
  component: ListarPessoaComponent },
  { path: 'pessoas/novo',
  component: InserirPessoaComponent },
  { path: 'pessoas/editar/:id',
  component: EditarPessoaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }