import { Time } from "@angular/common";
import { Prontuario } from "../prontuario/prontuario";
import { Medicamento } from "./medicamento";

export class Receituario{
      id: number;
      medicamento: Medicamento[] = new Array<Medicamento>();
      prontuario: Prontuario  = new Prontuario;
      dataCadastro: Date;
}