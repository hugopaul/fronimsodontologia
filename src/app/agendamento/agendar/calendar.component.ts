import { Component, ViewChild, AfterViewInit } from "@angular/core";
import {
  DayPilot,
  DayPilotCalendarComponent,
  DayPilotMonthComponent,
  DayPilotNavigatorComponent
} from "@daypilot/daypilot-lite-angular";
import { ApiconexaoService } from "src/app/apiconexao.service";
import { Paciente } from "src/app/pacientes/pacientes";
import { DataService } from "../data.service";

import { Observable } from 'rxjs';
import { Marcacao } from "../marcacao";
import { Usuario } from "src/app/cadastro/usuario";

@Component({
  selector: 'calendar-component',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']

})
export class CalendarComponent implements AfterViewInit {

  openModal = false;
  marcacao : Marcacao = new Marcacao();
  pacientes: Observable<Paciente[]>;
  usuarios: Observable<Usuario[]>;
    success: boolean = false;
  errors: String[];

  @ViewChild("day") day!: DayPilotCalendarComponent;
  @ViewChild("week") week!: DayPilotCalendarComponent;
  @ViewChild("month") month!: DayPilotMonthComponent;
  @ViewChild("navigator") nav!: DayPilotNavigatorComponent;

  events: Marcacao[]= [];

  constructor(private ds: DataService, private service: ApiconexaoService,) {
    this.viewWeek();
  }
  date = DayPilot.Date.today();

  configNavigator: DayPilot.NavigatorConfig = {
    showMonths: 3,
    cellWidth: 25,
    cellHeight: 25,
    locale: "pt-br",
    onVisibleRangeChanged: args => {
      this.loadEvents();
    }
  };

  buscarPaciente(x:any){
    this.service.getPacienteByName(this.marcacao.paciente.paciente).subscribe(
      response => {this.pacientes = response},
      errorResponse => {this.errors = errorResponse.error.errors})
  }

  selectPaciente(x: number){
    this.marcacao.paciente.id = x;
  }

  buscarDoutor(x:any){
    this.service.getDoutorByName(this.marcacao.usuario.nome).subscribe(
      response => {this.usuarios = response},
      errorResponse => {this.errors = errorResponse.error.errors})
  }

  selectDoutor(x: number){
    this.marcacao.usuario.id = x;
  }

  cadastrarMarcacao(){
    this.openModal = !this.openModal;
      this.service.cadastrarMarcacao(this.marcacao).subscribe(
        response => {
          console.log(response);
          this.loadEvents();
        }
      )
  }
  atualizarMarcacao(){
    this.openModal = !this.openModal;
    this.service.atualizarMarcacao(this.marcacao).subscribe(
      response => {
        
        console.log(response);
        this.loadEvents();
      }
    )
  }

  voltar(){
    this.openModal = !this.openModal
  }
  selectTomorrow() {
    this.date = DayPilot.Date.today().addDays(1);
  }

  changeDate(date: DayPilot.Date): void {
    this.configDay.startDate = date;
    this.configWeek.startDate = date;
    this.configMonth.startDate = date;
  }

  configDay: DayPilot.CalendarConfig = {
    viewType: "Day",
    timeFormat: "Clock24Hours",
    locale: "pt-br",
    onTimeRangeSelected: async (args) => {
      this.openModal = !this.openModal
      this.marcacao.start = args.start.toString();
      this.marcacao.end = args.end.toString();
    }
  };

  configWeek: DayPilot.CalendarConfig = {
    viewType: "Week",
    timeFormat: "Clock24Hours",
    locale: "pt-br",
    onTimeRangeSelected: async (args) => {
      //this.marcacao.dtInicio = args.start.toString();
      /*const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
      const dp = args.control;
      dp.clearSelection();
      if (!modal.result) { return; }
      dp.events.add(new DayPilot.Event({
        start: args.start,
        end: args.end,
        id: DayPilot.guid(),
        text: modal.result
      }));*/


    }
  };
 
  configMonth: DayPilot.MonthConfig = {
    locale: "pt-br",
  };



  ngAfterViewInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    const from = this.nav.control.visibleStart();
    const to = this.nav.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => {
      console.log(result)
      this.events = result;
    });
  }

  viewDay(): void {
    this.configNavigator.selectMode = "Day";
    this.configDay.visible = true;
    this.configWeek.visible = false;
    this.configMonth.visible = false;
  }

  viewWeek(): void {
    this.configNavigator.selectMode = "Week";
    this.configDay.visible = false;
    this.configWeek.visible = true;
    this.configMonth.visible = false;
  }

  viewMonth(): void {
    this.configNavigator.selectMode = "Month";
    this.configDay.visible = false;
    this.configWeek.visible = false;
    this.configMonth.visible = true;
  }


}

