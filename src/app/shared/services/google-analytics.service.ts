import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

if (typeof ga === "undefined" || localStorage === null) {
  let ga = null;
}

@Injectable()
export class GoogleAnalyticsService {
  production = environment.production;
  trackingId = environment.googleAnalyticsTrakingId;
  constructor() {
    if (!ga) {
      return;
    }
    if (this.production) {
      ga('create', this.trackingId, 'auto');
    } else {
      ga('create', this.trackingId, 'none');
    }
  }


  pageView(url: string) {
    if (!ga) {
      return;
    }

    if (this.production) {
      ga('set', 'page', url);
      ga('send', 'pageview');
    }
  }

  public emitEvent(eventCategory: string,
                   eventAction: string,
                   eventLabel: string = null,
                   eventValue: number = null) {
    if (!ga) {
      return;
    }

    ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
  }
}
