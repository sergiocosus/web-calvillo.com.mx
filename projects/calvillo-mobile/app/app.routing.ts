import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { ItemsComponent } from './item/items.component';
import { ItemDetailComponent } from './item/item-detail.component';
import { environment } from '~/environment';

const routes: Routes = [
    {path: '', redirectTo: '/galeria/guayabas-de-el-portn_1/foto/guayabas-y-sus-beneficios', pathMatch: 'full'},
    //{path: '', redirectTo: '/galeria/' + environment.defaultCategoryId, pathMatch: 'full'},
    {path: 'items', component: ItemsComponent},
    {path: 'item/:id', component: ItemDetailComponent},
    {path: '', loadChildren: './pages/pages.module#PagesModule'},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
