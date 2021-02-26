import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiconexaoService } from 'src/app/apiconexao.service';
import { Paciente } from '../pacientes';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.css']
})
export class PacientesFormComponent implements OnInit {

  paciente : Paciente = new Paciente;
  success: boolean = false;
  errors: String[];
  id:number;


  constructor(
    private service : ApiconexaoService,
    private router : Router,
    private acttivatedRouter : ActivatedRoute
  ) { 
    this.paciente = new Paciente();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.acttivatedRouter.params;
    params.subscribe(urlParams =>{
      this.id = urlParams['id'];
      if(this.id){
        this.service.getPacienteById(this.id).subscribe( 
          response => this.paciente = response, errorResponse => this.paciente = new Paciente())
      }
    })
  }
  onSubmit(){
    if (this.id) {
      this.service.putPaciente(this.paciente)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          console.log(this.errors)
          this.errors = ['Erro ao Atualizar.']
        })
    } else {
      this.service
        .salvarPaciente(this.paciente)
        .subscribe(response => {
          this.errors = null;
          this.success = true;
          this.paciente = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        });
    }
  }
  voltar(){
      this.router.navigate(["pacientes-list"])
  }

}
