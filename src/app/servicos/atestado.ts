import { Time } from "@angular/common";
import { Prontuario } from "../prontuario/prontuario";

export class Atestado{
      id: number;
      chegada: Date;
      saida: Date;
      repouso: number;
      cid: number;
      prontuario : Prontuario = new Prontuario;
      dataCadastro: Date;
}