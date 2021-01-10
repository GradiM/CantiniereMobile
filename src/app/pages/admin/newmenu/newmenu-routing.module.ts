import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewmenuPage } from './newmenu.page';

const routes: Routes = [
  {
    path: '',
    component: NewmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewmenuPageRoutingModule {}
