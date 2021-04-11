import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiconexaoService } from 'src/app/apiconexao.service';
import { Paciente } from 'src/app/pacientes/pacientes';
import { Financeiro } from '../financeiro';

@Component({
  selector: 'app-financiero-form',
  templateUrl: './financiero-form.component.html',
  styleUrls: ['./financiero-form.component.css']
})
export class FinancieroFormComponent implements OnInit {

  financeiro : Financeiro;
  id:number;
  success: boolean = false;
  errors: String[];

  constructor(
    private service : ApiconexaoService,
    private router: Router,
    private acttivatedRouter: ActivatedRoute

  ) { }

  voltar(){
    this.router.navigate(["financeiro-list"])
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.acttivatedRouter.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.getFinanceiroById(this.id).subscribe(
          response => this.financeiro = response, errorResponse => this.financeiro = new Financeiro())
          }
    })
  }
  onSubmit(){

    this.service.putFinanceiro(this.financeiro)
      .subscribe( response => {
        this.success = true,
        this.errors = null
        this.financeiro = response
      }, errorResponse =>{
        this.success = false
      })

  }

}
