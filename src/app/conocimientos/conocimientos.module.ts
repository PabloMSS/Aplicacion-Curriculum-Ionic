import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConocimientosPageRoutingModule } from './conocimientos-routing.module';

import { ConocimientosPage } from './conocimientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConocimientosPageRoutingModule
  ],
  declarations: [ConocimientosPage]
})
export class ConocimientosPageModule {}
