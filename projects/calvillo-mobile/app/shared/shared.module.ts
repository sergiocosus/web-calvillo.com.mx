import { NgModule } from '@angular/core';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

@NgModule({
    imports: [
        NativeScriptModule,
        TNSFontIconModule
    ],
    declarations: [ActionBarComponent],
    exports: [
        ActionBarComponent, TNSFontIconModule
    ],
})
export class SharedModule {
}
