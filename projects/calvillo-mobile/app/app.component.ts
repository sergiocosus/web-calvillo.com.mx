import { ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { TNSFontIconService } from "nativescript-ng2-fonticon";
import { SideDrawerService } from '~/shared/services/side-drawer.service';


require('nativescript-localstorage');

import { registerElement } from 'nativescript-angular/element-registry';
registerElement('ImageZoom', () => require('nativescript-image-zoom').ImageZoom);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    constructor(private _changeDetectionRef: ChangeDetectorRef,
                private fonticon: TNSFontIconService,
                private sideDrawerService: SideDrawerService) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this.sideDrawerService.sideDrawer = this.drawer;

        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }


}
