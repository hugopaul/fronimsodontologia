import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiconexaoService } from 'src/app/apiconexao.service';
import { Paciente } from '../pacientes';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent implements OnInit {

  paciente: Paciente[]=[];
  pacienteSelect: Paciente;
  mensagemSucesso: String;
  mensagemErro: String;

  constructor(
    private service : ApiconexaoService,
    private router: Router
  ) {   }

  ngOnInit(): void {
    this.service.getPaciente()
      .subscribe( response => this.paciente = response);
  }

  novoCadastro(){
    this.router.navigate(['/pacientes-form'])
  }

  preparaDelecao(paciente : Paciente){
    this.pacienteSelect = paciente;
  }

  
  deletarPaciente(){
    this.service.delPaciente(this.pacienteSelect)
    .subscribe(response => 
      {this.mensagemSucesso = 'Paciente deletado com sucesso!'
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
