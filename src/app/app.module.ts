import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { PacientesModule } from './pacientes/pacientes.module';
import { FinanceiroModule } from './financeiro/financeiro.module';
import { ProntuarioModule } from './prontuario/prontuario.module';
import { ServicosModule } from './servicos/servicos.module';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxMaskModule, IConfig } from 'ngx-mask';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent   
  ],
  imports: [
    NgxMaskModule.forRoot( maskConfig ),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    PacientesModule,
    FinanceiroModule,
    ProntuarioModule,
    ServicosModule,
    FormsModule,
    OrderModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
