import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Financeiro } from './financeiro/financeiro';
import { Paciente } from './pacientes/pacientes';
import { Atendimento } from './prontuario/atendimento';
import { Prontuario } from './prontuario/prontuario';
import { Atestado } from './servicos/atestado';
import { Medicamento } from './servicos/medicamento';
import { Receituario } from './servicos/receituario';

@Injectable({
  providedIn: 'root'
})
export class ApiconexaoService {

  constructor(private http: HttpClient) { }

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
  salvarMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    return this.http.post<Medicamento>('http://localhost:8080/medicamentos', medicamento);
  }

  salvarTodosMedicamentos(medicamento : Array<Medicamento>): Observable<Array<Medicamento>> {
    return this.http.post<Array<Medicamento>>("http://localhost:8080/medicamentos/saveall", medicamento);
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
    return this.http.get<Atendimento[]>("http://localhost:8080/atendimentos");
  }
  getMedicamento(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>("http://localhost:8080/medicamentos");
  }


  getAtestadoById(id: number): Observable<Atestado> {
    return this.http.get<any>(`http://localhost:8080/atestados/${id}`);
  }
  geFinanceiroById(id: number): Observable<Financeiro> {
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
    return this.http.delete<any>(`http://localhost:8080//salc/financeiros/${financeiro.id}`);
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




}
