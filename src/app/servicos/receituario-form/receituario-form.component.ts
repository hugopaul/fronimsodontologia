import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Paciente } from 'src/app/pacientes/pacientes';

@Component({
  selector: 'app-receituario-form',
  templateUrl: './receituario-form.component.html',
  styleUrls: ['./receituario-form.component.css']
})
export class ReceituarioFormComponent implements OnInit {

  hugo: string = "Hugo Paul Alves Carvalho";
  endereco: string = "GAMAGGIORE T 7 APT 302";
  cpf: string = "018.838.031.01";
  telefone: string = '1234-1234';
  medicamento: string;
  horas: string;
  dias: number;
  doutor: string = "Leonardo de Jesus Cezar";
  cro: string = "123456 CRO-DF";
  paciente: Paciente = new Paciente;

  dayName = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
  monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
  now = new Date;

  constructor() { }

  ngOnInit(): void {
  }
  gerarpdf() {

    let documento = new jsPDF.jsPDF();

    documento.addImage(this.imgData, 'PNG', 45, 10, 120, 40)
    documento.setFontSize(24);
    documento.setFont("Arial");
    documento.text("RECEITUÁRIO MÉDICO", 65, 65);
    documento.setFontSize(14);
    documento.text(`        Paciente: ${this.hugo}
        Endereço: ${this.endereco}
        Cpf/Rg: ${this.cpf}        Telefone: ${this.telefone} `, 12, 80);


    documento.text(`1 - ${this.medicamento} de ${this.horas} em ${this.horas} durante ${this.dias}`, 20, 120);


    documento.text(`  Brasília-DF, ${this.now.getDate()} de ${this.monName[this.now.getMonth()]} de ${this.now.getFullYear()}. `, 65, 172);
    documento.setLineWidth(0.5)
    documento.line(150, 200, 60, 200)
    documento.text(`${this.doutor} - ${this.cro}`, 60, 210);

    documento.save("teste.pdf");

  }














  imgData: any = ' data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsMAAAC+CAYAAADQrwJ0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAXRaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDEtMTFUMjM6MjQ6MDgtMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTAxLTEzVDIwOjM5OjQ2LTAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTAxLTEzVDIwOjM5OjQ2LTAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1N2Q1MDYyZC1hYzAxLWJkNGQtYTgyZS1iZGJlNmE0MTI3MjkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozMDljZGViYy04MjdiLTAzNGEtYWE2OC1jZDNhYzY0YTllZjkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NTY2ZDRmMi03NDU4LTFmNDItOGRlMi03YWY3YzhlNDRmYzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1NjZkNGYyLTc0NTgtMWY0Mi04ZGUyLTdhZjdjOGU0NGZjOSIgc3RFdnQ6d2hlbj0iMjAyMS0wMS0xMVQyMzoyNDowOC0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1N2Q1MDYyZC1hYzAxLWJkNGQtYTgyZS1iZGJlNmE0MTI3MjkiIHN0RXZ0OndoZW49IjIwMjEtMDEtMTNUMjA6Mzk6NDYtMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Hiso5AAA+0klEQVR4Xu3dCXwV1f0+/oc9YRUFK4Gwqa0EqxZBFhG/VVkFBYFg/VmqiOJKwVBtbQXEv7UqkWhdcKOttQoBKhYFAriwyA4qSxAFBBNQ2UnIvv3nc3MumXtzbzJ3n+V5v163mRlimjuZO/PMmc85p875I++qADlK3oZPUXL0iFojIiIico6ioly1VKmu+koOUfDFBgZhIiIiIoVh2CnKylD4zQ4UZR9UG4iIiIiIYdgJystQtP9rFH2TqTYQERERkWAYdoCSQwdRsGcXKlgdTkREROSB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';
}