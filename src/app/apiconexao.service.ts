import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AcroFormPasswordField } from 'jspdf';
import { Observable } from 'rxjs';
import { Usuario } from './cadastro/usuario';
import { Financeiro } from './financeiro/financeiro';
import { Paciente } from './pacientes/pacientes';
import { Atendimento } from './prontuario/atendimento';
import { Prontuario } from './prontuario/prontuario';
import { Atestado } from './servicos/atestado';
import { Medicamento } from './servicos/medicamento';
import { Receituario } from './servicos/receituario';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class ApiconexaoService {

  constructor(private http: HttpClient) { }

  clientId: 'ims-angular-app'
  clientSecret: '33934514'
  jwtHelper : JwtHelperService = new JwtHelperService();

  obterToken(){
    const tokenString = localStorage.getItem('access_token')
    if(tokenString){
      const token = JSON.parse(tokenString).access_token
      return token
    }
    return null
  }

  isAuthenticated() : boolean{
    const token = this.obterToken();
    if(token){
      const expired = this.jwtHelper.isTokenExpired(token)
      return !expired
    }
    return false
  }
  tryLogar(username:string, password : string) : Observable<any>{
    const params = new HttpParams()
                            .set('username', username)
                            .set('password', password)
                            .set('grant_type', "password");
    const headers = {
      "Authorization": "Basic aW1zLWFuZ3VsYXItYXBwOjMzOTM0NTE0",
      "Content-Type": "application/x-www-form-urlencoded"}
      return this.http.post("http://localhost:8080/oauth/token", params.toString(), { headers }  )
  }

  encerrarSessao(){
    localStorage.removeItem('access_token')
  }

  getUsuario(){
   const token =  this.obterToken();
   if(token){
     const usuario = this.jwtHelper.decodeToken(token).user_name
     return usuario;
   }
   return null;
  }
  getRole():Observable<String>{
    const token =  this.obterToken();
    var usuario;
   if(token){
     usuario = this.jwtHelper.decodeToken(token).user_name}
    return this.http.get<String>(`http://localhost:8080/usuarios/perfil/${usuario}`)
  }

  salvarAtestado(atestado: Atestado): Observable<Atestado> {
    return this.http.post<Atestado>('http://localhost:8080/atestados', atestado);
  }
  salvarFinanceiro(financeiro: Financeiro): Observable<Financeiro> {
    return this.http.post<Financeiro>('http://localhost:8080/financeiros', financeiro);
  }
  salvarPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>('http://localhost:8080/pacientes', paciente);
  }
  salvarProntuario(prontuario: Prontuario): Observable<Prontuario> {
    return this.http.post<Prontuario>('http://localhost:8080/prontuarios', prontuario);
  }
  salvarReceituario(receituario: Receituario): Observable<Receituario> {
    return this.http.post<Receituario>('http://localhost:8080/receituarios', receituario);
  }
  salvarAtendimento(atendimento: Atendimento): Observable<Atendimento> {
    return this.http.post<Atendimento>('http://localhost:8080/atendimentos', atendimento);
  }
  salvarMedicamento(medicamento: Array<Medicamento>): Observable<Array<Medicamento>> {
    return this.http.post<Array<Medicamento>>('http://localhost:8080/medicamentos', medicamento);
  }
  criarUsuario(usuario : Usuario) : Observable<any>{
    return this.http.post<any>('http://localhost:8080/usuarios', usuario)
}

  salvarTodosMedicamentos(medicamento : Array<Medicamento>): Observable<Array<Medicamento>> {
    return this.http.post<Array<Medicamento>>("http://localhost:8080/medicamentos/saveall", medicamento);
  }
  
  getPacienteByName(nome: string): Observable<any> {
    return this.http.post<string>(`http://localhost:8080/pacientes/buscar-string`, nome);
  }
  getMedicamentoByName(nome: string): Observable<any> {
    return this.http.post<string>(`http://localhost:8080/medicamentos/buscar-string`, nome);
  }
  getProntuarioByNamePaciente(nome: string): Observable<any> {
    return this.http.post<string>(`http://localhost:8080/prontuarios/buscar-string`, nome);
  }


  getAllByReceituario(id : number):Observable<Medicamento[]>{
    return this.http.get<Medicamento[]>(`http://localhost:8080/medicamentos/recbyid/${id}`);
  }

  getAtestado(): Observable<Atestado[]> {
    return this.http.get<Atestado[]>("http://localhost:8080/atestados");
  }
  getFinanceiro(): Observable<Financeiro[]> {
    return this.http.get<Financeiro[]>("http://localhost:8080/financeiros");
  }
  getPaciente(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>("http://localhost:8080/pacientes");
  }
  getProntuario(): Observable<Prontuario[]> {
    return this.http.get<Prontuario[]>("http://localhost:8080/prontuarios");
  }
  getReceituario(): Observable<Receituario[]> {
    return this.http.get<Receituario[]>("http://localhost:8080/receituarios");
  }
  getAtendimento(): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>("http://localhost:8080/atendimentos",);
  }
  getMedicamento(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>("http://localhost:8080/medicamentos");
  }

  
  getProntByPac( id:number ): Observable<Receituario>{
    return this.http.get<any>(`http://localhost:8080/prontuarios/prontbypac/${id}`);
  }

  getAtendsByPront(id: number): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(`http://localhost:8080/atendimentos/buscaratendsporid/${id}`);
  }


  getAtestadoById(id: number): Observable<Atestado> {
    return this.http.get<any>(`http://localhost:8080/atestados/${id}`);
  }
  getFinanceiroById(id: number): Observable<Financeiro> {
    return this.http.get<any>(`http://localhost:8080/financeiros/${id}`);
  }
  getPacienteById(id: number): Observable<Paciente> {
    return this.http.get<any>(`http://localhost:8080/pacientes/${id}`);
  }
  getProntuarioById(id: number): Observable<Prontuario> {
    return this.http.get<any>(`http://localhost:8080/prontuarios/${id}`);
  }
  getReceituarioById(id: number): Observable<Receituario> {
    return this.http.get<any>(`http://localhost:8080/receituarios/${id}`);
  }
  getAtendimentoById(id: number): Observable<Atendimento> {
    return this.http.get<any>(`http://localhost:8080/atendimentos/${id}`);
  }
  getMedicamentoById(id: number): Observable<Medicamento> {
    return this.http.get<any>(`http://localhost:8080/medicamentos/${id}`);
  }
  
 

  putAtestado(atestado: Atestado): Observable<any> {
    return this.http.put<Atestado>(`http://localhost:8080/atestados/${atestado.id}`, atestado);
  }
  putFinanceiro(financeiro: Financeiro): Observable<any> {
    return this.http.put<Financeiro>(`http://localhost:8080/financeiros/${financeiro.id}`, financeiro);
  }
  putPaciente(paciente: Paciente): Observable<any> {
    return this.http.put<Paciente>(`http://localhost:8080/pacientes/${paciente.id}`, paciente);
  }
  putProntuario(prontuario: Prontuario): Observable<any> {
    return this.http.put<Prontuario>(`http://localhost:8080/prontuarios/${prontuario.id}`, prontuario);
  }
  putReceituario(receituario: Receituario): Observable<any> {
    return this.http.put<Receituario>(`http://localhost:8080/receituarios/${receituario.id}`, receituario);
  }
  putAtendimento(atendimento: Atendimento): Observable<any> {
    return this.http.put<Atendimento>(`http://localhost:8080/atendimentos/${atendimento.id}`, atendimento);
  }
  putMedicamento(medicamento: Medicamento): Observable<any> {
    return this.http.put<Medicamento>(`http://localhost:8080/medicamentos/${medicamento.id}`, medicamento);
  }

  delAtestado(atestado: Atestado): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/atestados/${atestado.id}`);
  }
  delFinanceiro(financeiro: Financeiro): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/financeiros/${financeiro.id}`);
  }
  delPaciente(paciente: Paciente): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/pacientes/${paciente.id}`);
  }
  delProntuarion(prontuario: Prontuario): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/prontuarios/${prontuario.id}`);
  }
  delReceituario(receituario: Receituario): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/receituarios/${receituario.id}`);
  }
  delAtendimento(atendimento: Atendimento): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/atendimentos/${atendimento.id}`);
  }
  delMedicamento(medicamento: Medicamento): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/medicamentos/${medicamento.id}`);
  }


  verifyAndSaveMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    return this.http.post<Medicamento>('http://localhost:8080/medicamentos/verificaesalva', medicamento);
  }
}
