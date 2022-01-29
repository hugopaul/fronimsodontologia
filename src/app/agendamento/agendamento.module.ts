import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarComponent } from './calendar/calendar.component';
import { DayPilotModule }  from 'daypilot-lite-angular';
import { DataService } from './calendar/data.service';


@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    AgendamentoRoutingModule,
    RouterModule,
    FormsModule,
    OrderModule,
    HttpClientModule,
    BrowserModule,
    DayPilotModule
  ], exports: [CalendarComponent],
  providers:    [ DataService ]
})
export class AgendamentoModule { }
