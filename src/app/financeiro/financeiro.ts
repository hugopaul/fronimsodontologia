import { Prontuario } from "../prontuario/prontuario";

export class Financeiro{
      id: number;
      prontuario : Prontuario = new Prontuario();
      valor: string;
      descricao: string;
      dataLancamento: Date;
      observacao: string;
      dividido: number;
      forma:number;
      status: string;
}