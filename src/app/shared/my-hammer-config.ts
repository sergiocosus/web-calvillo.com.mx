import { HammerGestureConfig, } from '@angular/platform-browser';

declare var Hammer: any;

export class MyHammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: "pan-y"
    });
    return mc;
  }
}
