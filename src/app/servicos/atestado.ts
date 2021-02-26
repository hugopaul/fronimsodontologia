import { Time } from "@angular/common";
import { Prontuario } from "../prontuario/prontuario";

export class Atestado{
      id: number;
      chegada: Time;
      saida: Time;
      repouso: number;
      cid: number;
      prontuario: Prontuario;
      dataCadastro: Date;
}