import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { DayPilotModule } from '@daypilot/daypilot-lite-angular';
import {HttpClientModule} from "@angular/common/http";
import { CalendarComponent } from './agendar/calendar.component';
import { DataService } from './agendar/data.service';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    AgendamentoRoutingModule,
    HttpClientModule,
    DayPilotModule,
    RouterModule
  ], 
  declarations: [ CalendarComponent],
  exports:      [ CalendarComponent ],
  providers:    [ DataService ]
})
export class AgendamentoModule { }
