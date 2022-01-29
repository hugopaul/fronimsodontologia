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
export class CadastroFormComponent implements OnInit{

  username:string;
  password: string;
  perfil:string;
  registro:string= null
  msgSuccess:string = null;
  errors: string = null;

  constructor(
    private router : Router,
    private service : ApiconexaoService
  ) { }

  ngOnInit(){
   
  }
  
  onSubmit(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username
    usuario.password = this.password
    usuario.perfil = this.perfil
    if(this.perfil == 'DENTISTA'){
      usuario.registro = this.registro.toUpperCase()
    }
    console.log(usuario.registro);

    this.service.criarUsuario(usuario)
    .subscribe( response => {
      this.msgSuccess = "Cadastro realizado com sucesso!"
      this.errors = null
      this.username = '';
      this.password = '';
      this.perfil = '';
      this.registro = '';
      console.log(response)
    }, errorResponse => {
      console.log(errorResponse)
      if(errorResponse.error.text){      
        this.errors = null
      }else{
        this.errors = errorResponse.error
      }
      this.msgSuccess =errorResponse.error.text
    }
      )
  }

}
