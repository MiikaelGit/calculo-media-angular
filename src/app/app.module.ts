import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabelaNotaComponent } from './tabela-nota/tabela-nota.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { EditarInformacoesComponent } from './tabela-nota/editar-informacoes/editar-informacoes.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroFormComponent,
    TabelaNotaComponent,
    EditarInformacoesComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
