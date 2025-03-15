import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambioClavePageRoutingModule } from './cambio-clave-routing.module';

import { CambioClavePage } from './cambio-clave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambioClavePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CambioClavePage]
})
export class CambioClavePageModule {}
