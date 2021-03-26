import { Prontuario } from "./prontuario";

export class Atendimento { 
      
      id:number;
      atendimento:string;
      valor: string;
      prontuario:Prontuario;
      dataAtendimento: Date;
}