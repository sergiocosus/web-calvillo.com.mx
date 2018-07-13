import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryRouteComponent } from './directory-route.component';
import { VoidComponent } from '../../shared/components/void/void.component';

export const directoryRoutes: Routes = [
  {
    path: '',
    component: DirectoryRouteComponent,
    children: [
      {
        path: ':directory_link',
        component: VoidComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(directoryRoutes)],
  exports: [RouterModule]
})
export class DirectoryRoutingModule {
}
