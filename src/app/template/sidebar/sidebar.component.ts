import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiconexaoService } from 'src/app/apiconexao.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuarioLogado: string;
  role : string;
  constructor(
    private router: Router,
    private api :ApiconexaoService
  ) { 
  }

  ngOnInit(): void {
    this.api.getRole().subscribe(
    response =>{
    }, errorResponse =>{
      this.role = errorResponse.error.text
    }
  )
  this.getNome();
  }
  getNome(){
       this.api.getUsuario().subscribe(
         response => {},
         errorResponse => {this.usuarioLogado = errorResponse.error.text}
       )
  }

  logout(){
    this.api.encerrarSessao()
    this.router.navigate(['/login'])
  }
}
