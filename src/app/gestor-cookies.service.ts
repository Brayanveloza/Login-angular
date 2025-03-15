import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GestorCookiesService {

  private coockie = this.coockieService.get('tocken');
  private coockieCheck: Boolean = this.coockieService.check('tocken');
  private decode: any = [];
  
  constructor(private coockieService: CookieService) { }

  public setTocken(tocken: any){
    this.coockieService.set('tocken', tocken, 1, '/');
  }

  public getAccess(){
    if (this.coockieCheck){
      return true;
    }else{
      return false;
    }
  }

  public getUsuario(){
    if (this.coockieCheck){
      this.decode = jwtDecode(this.coockie)
    }
    return this.decode.nombre;
  }

  public closeSesion(){
    this.coockieService.deleteAll();
  }

  public getTocken(){
    return this.coockieService.get('tocken');
  }

  public setLogOut(){
    this.coockieService.deleteAll()
  }

  public getTime(){
    if (this.coockieCheck){
      this.decode =  jwtDecode(this.coockie)
    }
    return this.decode.timelimit;
  }

}
