import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { environment } from '~/environment';

const routes: Routes = [
    {path: '', redirectTo: '/galeria/guayabas-de-el-portn_1/foto/guayabas-del-portn', pathMatch: 'full'},
  //  {path: '', redirectTo: '/galeria/' + environment.defaultCategoryId, pathMatch: 'full'},
   // {path: '', redirectTo: '/directorio/quesos-"el-fraile"', pathMatch: 'full'},
   // {path: '', redirectTo: '/mapa', pathMatch: 'full'},
    {path: '', loadChildren: './pages/pages.module#PagesModule'},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
