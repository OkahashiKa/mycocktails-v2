import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../app/pages/main/main.component';
import { ManagementMaterialsComponent } from './pages/management-materials/management-materials.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'management-materials',
    component: ManagementMaterialsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
