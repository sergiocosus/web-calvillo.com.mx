import { Injectable } from '@angular/core';
import * as utils from 'tns-core-modules/utils/utils';
import Uri = android.net.Uri;
import Intent = android.content.Intent;
const app = require('application');
import * as Connectivity from 'tns-core-modules/connectivity';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {
  }

  openUrl(url) {
    utils.openUrl(url);
  }

  dialPhone(number) {
    const intent = new Intent(Intent.ACTION_DIAL);
    intent.setData(Uri.parse('tel:' + number));
    app.android.foregroundActivity.startActivity(intent);
  }

  toast(text) {
    console.log(text);
    //Toast.makeText(text).show();
  }

  checkConnectivity() {
    Connectivity.startMonitoring((newConnectionType: number) => {
      switch (newConnectionType) {
        case Connectivity.connectionType.none:
          this.toast('No hay conexión a internet, necesitas conexión para ver el contenido')
          break;
        case Connectivity.connectionType.wifi:
          break;
        case Connectivity.connectionType.mobile:
          break;
      }
    });
  }

  cancelCheckConnectivity() {
    Connectivity.stopMonitoring();
  }
}
