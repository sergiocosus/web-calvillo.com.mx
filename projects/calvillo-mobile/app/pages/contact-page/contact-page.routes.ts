import { Routes } from '@angular/router';
import { DirectoryPageComponent } from '~/pages/directory-page/directory-page/directory-page.component';
import { ContactPageComponent } from '~/pages/contact-page/contact-page/contact-page.component';
// app

export const ContactPageRoutes: Routes = [
  {
    path: '',
    component: ContactPageComponent,
    pathMatch: 'full'
  }
];
