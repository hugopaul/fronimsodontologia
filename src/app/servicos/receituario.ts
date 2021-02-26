import { Time } from "@angular/common";
import { Prontuario } from "../prontuario/prontuario";

export class Receituario{
      id: number;
      medicamento: string;
      horas: Time;
      dias: number;
      prontuario: Prontuario;
      dataCadastro: Date;
}