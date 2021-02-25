import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioCliPageRoutingModule } from './formulario-cli-routing.module';

import { FormularioCliPage } from './formulario-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioCliPageRoutingModule
  ],
  declarations: [FormularioCliPage]
})
export class FormularioCliPageModule {}
