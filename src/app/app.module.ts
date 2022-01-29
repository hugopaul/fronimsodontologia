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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { LoginComponent } from './login/login.component';
import { CadastroModule } from './cadastro/cadastro.module';
import { LayoutComponent } from './layout/layout.component';
import { ApiconexaoService } from './apiconexao.service';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { TokenInterceptor } from './token.interceptor';
import { AgendamentoModule } from './agendamento/agendamento.module';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent   
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
    LoginModule,
    FormsModule,
    OrderModule,
    RouterModule,
    CadastroModule,
    CommonModule,
    AgendamentoModule
  ],
  providers: [
    ApiconexaoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
