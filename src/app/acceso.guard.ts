import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GestorCookiesService } from './gestor-cookies.service';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AccesoGuard implements CanActivate {

  public cookieAccess = this.coockieService.getAccess();
  public acceso: any = true;

  constructor(private route: Router, private coockieService: GestorCookiesService, private restService: RestService){}

  redirect(flag: boolean): any{
    if (!flag){
      this.route.navigate(['/', 'login'])
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let tocken: any = {tocken: this.coockieService.getTocken()}
    //console.log(tocken)
    if(this.cookieAccess){
      if(Math.round(Date.now()/1000)>this.coockieService.getTime()){
        alert("Se cerro la sesion por inactividad");
        this.coockieService.setLogOut();
        window.location.reload();
        this.route.navigate(['/']);
        this.acceso = false;
      }else{
        this.validarTocken(tocken)
      }
    }else{
      this.acceso = false;
    }
    this.redirect(this.acceso);
    return this.acceso;
  }
  
  public validarTocken(data: any) {
    this.restService.post("http://localhost/pruebaTecnica/Maestros/Usuarios.php", data).subscribe( respuesta => {
      let tocken: any;
      tocken = respuesta;
      //console.log(tocken)
      if(tocken.mensaje == "Acceso permitido"){
        this.coockieService.setTocken(tocken.tocken);
        this.acceso = true;
      }else{
        alert("Datos incorrectos");
        this.coockieService.setLogOut();
        window.location.reload();
        //this.redirect(this.acceso);
        this.acceso = false;
      }
    })
  }
  
}
