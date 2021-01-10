import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageMealPageRoutingModule } from './manage-meal-routing.module';

import { ManageMealPage } from './manage-meal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageMealPageRoutingModule
  ],
  declarations: [ManageMealPage]
})
export class ManageMealPageModule {}
