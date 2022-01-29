import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiconexaoService } from 'src/app/apiconexao.service';

@Component({
  selector: 'app-cadastro-list',
  templateUrl: './cadastro-list.component.html',
  styleUrls: ['./cadastro-list.component.css']
})
export class CadastroListComponent implements OnInit {
  role:string;
  constructor(
    private service:ApiconexaoService,
    private router :Router
  ) { }

  ngOnInit(): void {}
    

}
