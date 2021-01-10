import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewmealPage } from './newmeal.page';

const routes: Routes = [
  {
    path: '',
    component: NewmealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewmealPageRoutingModule {}
