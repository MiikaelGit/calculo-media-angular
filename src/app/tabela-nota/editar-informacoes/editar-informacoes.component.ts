import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAluno } from 'src/app/informacoes';
import { MediaService } from 'src/app/media.service';

@Component({
  selector: 'app-editar-informacoes',
  templateUrl: './editar-informacoes.component.html',
  styleUrls: ['./editar-informacoes.component.css']
})
export class EditarInformacoesComponent implements OnInit {
  aluno: IAluno | undefined;
  id!: number;
  nome!: string;
  nota1!: number;
  nota2!: number;
  media!: number;
  condicao!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mediaService: MediaService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const alunoId = Number(routeParams.get('id'));
    this.aluno = this.mediaService.getOne(alunoId);
    this.id = this.aluno!.id;
    this.nome = this.aluno!.nome;
    this.nota1 = this.aluno!.nota1;
    this.nota2 = this.aluno!.nota2;
    this.media = this.aluno!.media;
    this.condicao = this.aluno!.condicao;
  }

  editarInformacoes(){
    alert("As informações do aluno foram alteradas!")
    this.id = this.aluno!.id;
    this.aluno!.nome = this.nome;
    this.aluno!.nota1 = this.nota1;
    this.aluno!.nota2 = this.nota2;
    this.media = this.calcularMedia(this.nota1, this.nota2).media;
    this.aluno!.media = this.media;
    this.condicao = this.calcularMedia(this.nota1, this.nota2).condicao;
    this.aluno!.condicao = this.condicao
    this.router.navigate([""])
  }
  calcularMedia(nota1: number, nota2: number){
    const media = (nota1+nota2)/2;
    const condicao = this.verificarAprovado(media);
    return {media, condicao}
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
}
