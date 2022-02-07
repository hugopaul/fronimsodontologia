import { UpperCasePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isRadialGradient } from 'html2canvas/dist/types/css/types/image';
import { ApiconexaoService } from 'src/app/apiconexao.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {

  username: string;
  password: string;
  nome: string;
  perfil: string;
  registro: string = null
  msgSucesso: boolean;
  msgfalha: boolean;
  errors: string[];
  errorss: string[];
  constructor(
    private router: Router,
    private service: ApiconexaoService
  ) { }

  ngOnInit() {

  }

  onSubmit() {
    const usuario: Usuario = new Usuario();
    usuario.username = this.username
    usuario.password = this.password
    usuario.perfil = this.perfil
    usuario.nome = this.nome
    if (this.perfil == 'DENTISTA') {
      usuario.registro = this.registro.toUpperCase()
    }

    this.service.criarUsuario(usuario)
      .subscribe(response => {
        this.msgSucesso = true
        this.msgfalha = false;
        this.username = '';
        this.password = '';
        this.nome = '';
        this.perfil = '';
        this.registro = '';
      }, errorResponse => {
        console.log(errorResponse)
        this.msgSucesso = false
        this.msgfalha = true;
        if(errorResponse.error.text == "Usuário cadastrado com sucesso!"){
          this.msgfalha=false
        }else if (errorResponse.error.errors) {
          this.errors = errorResponse.error.errors
        }else {
          this.errors = [];
          this.errors[0] = errorResponse.error.toString();
        }
      }
      )
  }

}
