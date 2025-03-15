import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  public mensaje: any = []; 
  public empresas: any = []; 
  public crear: FormGroup | any; 
 
  constructor(private restService: RestService, private formBuilder: FormBuilder) {
   }

  ngOnInit() { 
    this.crear = this.formBuilder.group({
      username: [''],
      password: [''],
      estado: ['1'], 
    })
  }
  handleRefresh(event: any) { 
    window.location.reload()
  }
  crearDato(){
    this.usuarios(this.crear.value);
  }

  public usuarios(datos: any) {
    this.restService.post("http://localhost/pruebaTecnica/Maestros/Usuarios.php",datos ).subscribe( respuesta => {
      let dato: any = respuesta 
      this.mensaje = dato.mensaje

      alert(this.mensaje)
    window.location.reload()  
    })
  }

}
