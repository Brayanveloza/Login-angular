import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../rest.service';
import { GestorCookiesService } from '../gestor-cookies.service';

@Component({
  selector: 'app-cambio-clave',
  standalone:false,
  templateUrl: './cambio-clave.page.html',
  styleUrls: ['./cambio-clave.page.scss'],
})
export class CambioClavePage implements OnInit {

  public mensaje: any = []; 
  public crear: FormGroup | any; 

  constructor(private restService: RestService, private coockieService: GestorCookiesService, private formBuilder: FormBuilder ) {}

  ngOnInit() {
    //this.crearContrasena();
    this.crear = this.formBuilder.group({ 
      username: [this.coockieService.getUsuario()], 
      cambioclave: ['', Validators.required], 
      clave: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/)
        ]
      ], 
      confirclave: ['',Validators.required,] 
    })
  }
  
  handleRefresh(event: any) { 
    window.location.reload()
  }

  crearDato(){
    if(this.crear.value.clave == this.crear.value.confirclave){
      this.crearContrasena(this.crear.value); 
    }else{
      alert('Las contraseñas no coinciden');
    }
   console.log(this.crear.value)
  }

  public crearContrasena(datos: any) {
    this.restService.post("http://localhost/pruebaTecnica/Maestros/Usuarios.php",datos ).subscribe( respuesta => {
      let dato: any = respuesta 
      this.mensaje = dato.mensaje
      console.log(respuesta) 

      alert(this.mensaje)
      //window.location.reload()
    })
  }

}
