import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';


@Injectable()
export class ScriptService {
  private facebookSdkLoaded = false;

  constructor() {
    this.loadFacebook();
  }

  loadFacebook() {
    if (this.facebookSdkLoaded) {
      return;
    }

    (function(d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.9&appId=" + environment.facebookAppId;
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    this.facebookSdkLoaded = true;
  }

}
