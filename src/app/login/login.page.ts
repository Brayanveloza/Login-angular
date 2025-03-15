import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { GestorCookiesService } from '../gestor-cookies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public usuario: FormGroup | any;
  public crear: FormGroup | any;
  public mensaje: any = [];
  public mostrarRegistro: boolean = false; 
  public isLoggedIn: boolean = false; 
  public mensaje1: any;

  constructor(private restService: RestService, private formBuilder: FormBuilder, private coockieService: GestorCookiesService, private route: Router) { }

  ngOnInit() {
    if(this.coockieService.getAccess()){
      this.route.navigate(['/']);
      
    }

    this.usuario = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.email]],
      clave: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/)
        ]
      ]
    })

    this.crear = this.formBuilder.group({
      nombre: ['',Validators.required],
      apellidos: ['',Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/)
        ]
      ],
      estado: ['1'], 
    })
  }

  toggleFormulario() {
    this.mostrarRegistro = !this.mostrarRegistro;
  }


  enviar(){
    this.validarUsuario(this.usuario.value)
    console.log(this.usuario.value)
  }

  crearDato(){
    this.usuarios(this.crear.value);
  }

  public validarUsuario(data: any) {
    this.restService.post("http://localhost/pruebaTecnica/Maestros/Usuarios.php", data).subscribe( respuesta => {
      let tocken: any;
      tocken = respuesta;
      console.log(respuesta)
      if(tocken.mensaje){
        alert(tocken.mensaje);
      }else{
        this.isLoggedIn = true; 
        this.coockieService.setTocken(tocken.tocken)
        setTimeout(() => {
          window.location.reload();
        }, 3000); 
      }
    })
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
