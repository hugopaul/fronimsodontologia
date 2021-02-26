import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiconexaoService } from 'src/app/apiconexao.service';
import { Financeiro } from 'src/app/financeiro/financeiro';
import { Paciente } from 'src/app/pacientes/pacientes';
import { Atendimento } from '../atendimento';
import { Prontuario } from '../prontuario';

@Component({
  selector: 'app-prontuario-form',
  templateUrl: './prontuario-form.component.html',
  styleUrls: ['./prontuario-form.component.css']
})
export class ProntuarioFormComponent implements OnInit {


  prontuario : Prontuario;
  success: boolean;
  errors: String[];
  id:number;
  pacientes: Observable<Paciente[]>;
  paciente: Paciente[]= [];
  valorServico : string;
  anotacao:string;
  sucessoAtend: string;
  erroAtend: string;

  finan : Financeiro ;
 
  denteNumeral: Number[]= [11,12,13,14,15,16,17,18,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,41,42,43,44,45,46,47,48];


  denteSelect: string;

  dentesAnotados:string ;

  atendimento:Atendimento[];

  constructor(
    private service : ApiconexaoService,
    private router : Router,
    private acttivatedRouter : ActivatedRoute
  ) { 
    this.prontuario = new Prontuario();
    this.finan = new Financeiro();
  }

  ngOnInit(): void {  
    this.pacientes = this.service.getPaciente();
    let params : Observable<Params> = this.acttivatedRouter.params;
    params.subscribe(urlParams =>{
      this.id = urlParams['id'];
      if(this.id){
        this.service.getProntuarioById(this.id).subscribe( 
          response => this.prontuario = response, errorResponse => this.prontuario = new Prontuario())
      }if(this.id){
        this.service.getAtendimento().subscribe(
          response => this.atendimento = response
        )
      }
    });
  }

   dentesComAnotacao(){
      for ( let i = 0; i < this.prontuario.dentes.length; i++){
          if(this.prontuario.dentes[i] == ""){
            this.dentesAnotados = this.dentesAnotados + "," + i;
          }
      }
  }

  limparCampo(x:string){
    this.prontuario.dentes[x] == null;
  }

  onSubmit(){
    console.log(this.prontuario);
    if (this.id) {
      this.service.putProntuario(this.prontuario)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          console.log(this.errors)
          this.errors = ['Erro ao Atualizar.']
        })
    } else {
      this.service
        .salvarProntuario(this.prontuario)
        .subscribe(response => {
          this.errors = null;
          this.success = true;
          this.prontuario = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        });
    }
  }
  voltar(){
      this.router.navigate(["/prontuario-list"])
  }

  enviarParaFinanceiro(){
          if(this.prontuario.id){
            this.finan.prontuario = this.prontuario;
            this.finan.valor = this.valorServico;
            this.service.salvarFinanceiro(this.finan).subscribe(response => {
              this.success = true;
              this.errors = null;
            }, errorResponse => {
              console.log(this.errors)
              this.errors = ['Erro ao Atualizar.']
            });
          } else {
            this.errors = ["Deve salvar os dados do prontuário antes de enviar ao Financeiro"];
          }

  }
  myimg:string= "assets/odontograma.png";


  onKeyUp(x) {
    if(this.finan.valor){
      this.valorServico = this.finan.valor.toString();
    }
    this.valorServico = this.valorServico +'';
    this.valorServico = this.valorServico.replace(/\D+/g, '');
    this.valorServico = this.valorServico.replace(/([0-9]{2})$/g, ",$1");
      if (this.valorServico.length > 6) {
        this.valorServico = this.valorServico.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }
  return this.valorServico;
  }

  dstFalse(){
    this.prontuario.dst = false;
  }
  dstTrue(){
    this.prontuario.dst = true;
  }
  cardiacoTrue(){
    this.prontuario.cardiaco = true;
  }
  cardiacoFalse(){
    this.prontuario.cardiaco = false;
  }
  epileticoTrue(){    
    this.prontuario.epiletico = true;
  }
  epileticoFalse(){
    this.prontuario.epiletico = false;
  }
  gestanteTrue(){   
    this.prontuario.gestante = true;
  }
  gestanteFalse(){
    this.prontuario.gestante = false;
  }
  diabeticoTrue(){    
    this.prontuario.diabetico = true;
  }
  diabeticoFalse(){
    this.prontuario.diabetico = false;

  }
  hipertensoTrue(){    
    this.prontuario.hipertenso = true;
  }
  hipertensoFalse(){
    this.prontuario.hipertenso = false;
  }
  salvarAnotacaoDente(){
    this.prontuario.dentes[this.denteSelect] = this.anotacao;
  }
  preparaAnotacao(dente:number){
    this.denteSelect = dente.toString();
  }

  
  key: string = 'id'; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;
  sort(key) {
      this.key = key;
      this.reverse = !this.reverse;
  }

  delecaoAtendimento(atend : Atendimento){
      this.service.delAtendimento(atend).subscribe(
        response => {
          this.erroAtend = null;
          this.sucessoAtend = "Deletado com Sucesso!!!"
        }, errorResponse => {
          this.erroAtend = "Erro ao deletar Atendimento!!!",
          this.sucessoAtend = null;
        }
        )

  }
}
