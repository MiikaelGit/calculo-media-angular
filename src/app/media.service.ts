import { Injectable } from '@angular/core';
import { IAluno, alunos } from './informacoes';

@Injectable({
  providedIn: 'root'
})

export class MediaService {
  alunos: IAluno[] = alunos;
  
  constructor() { }
  
  calcularMedia(id: number, nome: string, nota1: number, nota2: number){
    const media = (nota1+nota2)/2;
    const condicao = this.verificarAprovado(media);
    const aluno = {id, nome, nota1, nota2, media, condicao};
    alunos.push(aluno);
  }

  verificarAprovado(media:number){
    let condicao = ""
    if(media >= 7){
      condicao = "Aprovado(a)";
    } else{
      condicao = "Reprovado(a)";
    }
    return condicao;
  }
  deletarAluno(alunoId: number){
    this.alunos = this.alunos.filter(aluno => aluno.id !== alunoId);
    return this.alunos;
  }

  getOne(alunoId: number){
    return this.alunos.find(aluno => aluno.id == alunoId);
  }
}
