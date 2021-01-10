import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewmealPageRoutingModule } from './newmeal-routing.module';

import { NewmealPage } from './newmeal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewmealPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewmealPage]
})
export class NewmealPageModule {}
