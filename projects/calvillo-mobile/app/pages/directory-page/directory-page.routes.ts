import { Routes } from '@angular/router';
import { DirectoryPageComponent } from '~/pages/directory-page/directory-page/directory-page.component';
// app

export const DirectoryPageRoutes: Routes = [
  {
    path: 'directorio/:directoryLink',
    component: DirectoryPageComponent,
    pathMatch: 'full'
  }
];
