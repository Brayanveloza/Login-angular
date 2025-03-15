import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosMaestroPageRoutingModule } from './datos-maestro-routing.module';

import { DatosMaestroPage } from './datos-maestro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosMaestroPageRoutingModule
  ],
  declarations: [DatosMaestroPage]
})
export class DatosMaestroPageModule {}
