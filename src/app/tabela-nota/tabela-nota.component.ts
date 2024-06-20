import { Component, OnInit } from '@angular/core';
import { IAluno, alunos } from '../informacoes';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-tabela-nota',
  templateUrl: './tabela-nota.component.html',
  styleUrls: ['./tabela-nota.component.css']
})
export class TabelaNotaComponent implements OnInit {
  alunos: IAluno[] | undefined = alunos;

  constructor(
    public mediaService: MediaService
  ) { }

  ngOnInit(): void {
    this.alunos = alunos;
  }
  
  deletarAluno(alunoId: number){
    this.alunos = this.mediaService.deletarAluno(alunoId);
  }

}
