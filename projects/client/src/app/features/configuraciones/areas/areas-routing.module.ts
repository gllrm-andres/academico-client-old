import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasPageComponent } from './pages/areas-page/areas-page.component';

const routes: Routes = [
  {
    path: '',
    component: AreasPageComponent,
  },
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreasRoutingModule {}
