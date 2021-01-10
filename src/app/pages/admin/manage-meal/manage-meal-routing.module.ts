import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageMealPage } from './manage-meal.page';

const routes: Routes = [
  {
    path: '',
    component: ManageMealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageMealPageRoutingModule {}
