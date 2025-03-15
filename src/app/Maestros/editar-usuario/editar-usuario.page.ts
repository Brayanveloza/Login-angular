import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-editar-usuario',
  standalone: false,
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
})
export class EditarUsuarioPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal | any; 
  isModalOpen = false;
  public empresas: any = []; 
  public usuarios: any = []; 
  public editar: FormGroup | any; 

  constructor(private restService: RestService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.cargarUsuarios();
    
    this.route.events.subscribe((event) => { 
      if (event instanceof NavigationEnd) {
        if (this.route.url!= '/editar-usuarios') {
          setTimeout(() => {
            //window.location.reload();
          }, 500); 
        }
      }
    });

  }

  generarform(dato: any){
    //console.log(dato);

    this.editar = this.formBuilder.group({ 
      id: [dato.id], 
      username: [dato.username],
      estado: [dato.estado],
    })
  }

  cambiarClave(username: any){ 
    let data= { 
      username: username,
      clave: 'Diagnostiya123'
    }
    this.actualizarUsuarios(data)
    console.log(data)
  }

  onMyBooleanChange(){
    //console.log(this.editar.value);
    }

  setOpen(isOpen: boolean,dato: any) { 
    if(dato.estado == 0){ 
      dato.estado = false
    }else{
      dato.estado = true
    }

    this.generarform(dato) 
    this.isModalOpen = isOpen; 
  }

  handleRefresh(event: any) {
    window.location.reload() 
  }

  confirm(){
    this.isModalOpen = false
  }

  actualizar(){
    this.actualizarUsuarios(this.editar.value);
  }

  public cargarUsuarios() {
    this.restService.get("http://localhost/pruebaTecnica/Maestros/Usuarios.php").subscribe( respuesta => {
    let resp: any = respuesta
    this.usuarios = resp.items; 

      //console.log(respuesta)
    })
  }

  public actualizarUsuarios(datos: any) { 
    this.restService.post("http://localhost/pruebaTecnica/Maestros/Usuarios.php",datos ).subscribe( respuesta => {
    alert("Dato actualizado con exito")
    window.location.reload()
    })
  }

}
