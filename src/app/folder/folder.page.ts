import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestorCookiesService } from '../gestor-cookies.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: false,
})
export class FolderPage implements OnInit {

  
  public mensaje: any; 
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private coockieService: GestorCookiesService, private restService: RestService) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.mensaje = this.coockieService.getUsuario()
    //this.cargarElementos();
    //console.log(this.cargarElementos())
  }

}
