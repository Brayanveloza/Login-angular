import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-maestro',
  standalone:false,
  templateUrl: './datos-maestro.page.html',
  styleUrls: ['./datos-maestro.page.scss'],
})
export class DatosMaestroPage implements OnInit {

  constructor(private route: Router) { }

  handleRefresh(event: any) { 
    window.location.reload()
  }

  ngOnInit() {

  }

  usuarios(){
    this.route.navigate(['usuario'])
  }

  editarUsuarios(){
    this.route.navigate(['editar-usuario'])
  }


}
