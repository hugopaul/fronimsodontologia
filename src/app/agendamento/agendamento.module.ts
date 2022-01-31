import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { DayPilotModule } from '@daypilot/daypilot-lite-angular';
import {HttpClientModule} from "@angular/common/http";
import { CalendarComponent } from './agendar/calendar.component';
import { RouterModule } from '@angular/router';
import { DataService } from './data.service';


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
