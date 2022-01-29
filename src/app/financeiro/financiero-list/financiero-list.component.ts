import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiconexaoService } from 'src/app/apiconexao.service';
import { Financeiro } from '../financeiro';

@Component({
  selector: 'app-financiero-list',
  templateUrl: './financiero-list.component.html',
  styleUrls: ['./financiero-list.component.css']
})
export class FinancieroListComponent implements OnInit {

  financeiro: Financeiro[] = []
  financeiroSelect: Financeiro;
  mensagemSucesso: String;
  mensagemErro: String;
  role:string;

  constructor(
    private service : ApiconexaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getFinanceiro()
      .subscribe( response => this.financeiro = response );
  }
  
  deletarFinanceiro(){
    this.service.delFinanceiro(this.financeiroSelect)
    .subscribe(response => 
      {this.mensagemSucesso = 'Pagamento deletado com sucesso!'
       this.ngOnInit();
    },
    erro => this.mensagemErro = "Algo deu errado!");
  }

  preparaDelecao(financeiro : Financeiro){
    this.financeiroSelect = financeiro;
  }
   // Configuração da ordenação
   key: string = 'id'; // Define um valor padrão, para quando inicializar o componente
   reverse: boolean = false;
   sort(key) {
       this.key = key;
       this.reverse = !this.reverse;
   }
}

