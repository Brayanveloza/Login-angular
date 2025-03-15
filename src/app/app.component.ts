import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { GestorCookiesService } from './gestor-cookies.service';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  isLoginPage = false;
  public appPages = [
    { title: 'Admin', url: '/datos-maestro', icon: 'mail' },
    { title: 'Cambio de contraseña', url: '/cambio-clave', icon: 'mail' },
  ];
  
  constructor(private cookies: GestorCookiesService, private route: Router) {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.urlAfterRedirects === '/login'; // Detecta la ruta final
      }
    });
  }
  
  logoff(){
    this.cookies.closeSesion();
    window.location.reload()
  }
}
