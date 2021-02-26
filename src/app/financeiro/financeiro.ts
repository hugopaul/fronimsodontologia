import { Prontuario } from "../prontuario/prontuario";

export class Financeiro{
      id: number;
      prontuario : Prontuario;
      valor: string;
      descricao: string;
      dataLancamento: Date;
}