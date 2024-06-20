import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { alunos } from '../informacoes';


@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {
  id: number = Math.floor(Date.now() * Math.random());
  nome!: string;
  nota1!: number;
  nota2!: number;
  constructor(
    private mediaService: MediaService,
  ) { }

  ngOnInit(): void {
  }

  calcularMedia(){
    if(!this.nome || !(this.nota1 || this.nota2)){
      alert("Preencha os campos corretamente.")
      return;
    }else if(this.nome.length < 3){
      alert("O campo de nome precisa ter no mínimo 3 caracteres");
      this.nome = "";
      return;
    }else{
      this.mediaService.calcularMedia(this.id, this.nome, this.nota1, this.nota2);
      this.id = Math.floor(Date.now() * Math.random());
      this.nome = "";
      this.nota1 = 0;
      this.nota2 = 0;
    }
  }

}
