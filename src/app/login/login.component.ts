import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiconexaoService } from '../apiconexao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string;
  password: string;
  errors: String[];

  constructor(
    private router : Router,
    private service : ApiconexaoService

  ) { }

  
  onSubmit(){
    this.service.tryLogar(this.username, this.password)
        .subscribe(response => {
          const acess_token = JSON.stringify(response);
          localStorage.setItem('access_token',acess_token)
          this.router.navigate(['/home'])
          
        },
        errorResponse => {
            this.errors = ['Usuário e/ou senha incorretos']

        });
            
        }

  

}
