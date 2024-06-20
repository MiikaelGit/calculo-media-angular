import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarInformacoesComponent } from './tabela-nota/editar-informacoes/editar-informacoes.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: "", component: MainComponent},
  {path:':id', component: EditarInformacoesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
