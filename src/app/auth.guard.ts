import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ApiconexaoService } from './apiconexao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  role:string;
  constructor(
    private apiconexao :ApiconexaoService,
    private router : Router
  ){
    
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{

    const authenticate = this.apiconexao.isAuthenticated();
  if(authenticate){
    if(state.url = "/pacientes/form"||"/pacientes/form"||"/pacientes"){
      this.apiconexao.getRole().subscribe(
        response =>{
        }, errorResponse =>{
          this.role = errorResponse.error.text
        }
      )
      if(this.role != 'DENTISTA'){
          this.router.navigate[('/home')]
      }
    }
    return true;
  }else{
    this.router.navigate(['/login']);
    return false
  }
  }
  
}
