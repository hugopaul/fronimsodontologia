import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiconexaoService } from 'src/app/apiconexao.service';
import { Prontuario } from '../prontuario';

@Component({
  selector: 'app-prontuario-list',
  templateUrl: './prontuario-list.component.html',
  styleUrls: ['./prontuario-list.component.css']
})
export class ProntuarioListComponent implements OnInit {

  prontuario: Prontuario[]=[];
  prontuarioSelect: Prontuario;
  mensagemSucesso: String;
  mensagemErro: String;

  constructor(
    private service : ApiconexaoService,
    private router: Router
  ) {   }

  ngOnInit(): void {
    this.service.getProntuario()
      .subscribe( response => this.prontuario = response);
  }

  novoCadastro(){
    this.router.navigate(['prontuario-form'])
  }

  preparaDelecao(prontuario : Prontuario){
    this.prontuarioSelect = prontuario;
  }

  
  deletarProntuario(){
    this.service.delProntuarion(this.prontuarioSelect)
    .subscribe(response => 
      {this.mensagemSucesso = 'Prontuário deletado com sucesso!'
       this.ngOnInit();
    },
    erro => this.mensagemErro = "Algo deu errado!");
  }

  // Configuração da ordenação
  key: string = 'id'; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;
  sort(key) {
      this.key = key;
      this.reverse = !this.reverse;
  }
}
