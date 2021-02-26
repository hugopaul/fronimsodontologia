import { Paciente } from "../pacientes/pacientes";

export class Prontuario { 
      
      id: number;

      paciente: Paciente = new Paciente;
      diabetico: boolean = null;
      hipertenso: boolean = null;
      cardiaco: boolean = null;
      dst: boolean = null;
      gestante: boolean = null;
      epiletico: boolean = null;
      observacao:string;


      dataCadastro: Date;

      dentes: Array<any>[32] = new Array;

}