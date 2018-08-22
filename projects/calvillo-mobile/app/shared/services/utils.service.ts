import { Injectable } from '@angular/core';
import * as utils from 'tns-core-modules/utils/utils';
import Uri = android.net.Uri;
import Intent = android.content.Intent;
const app = require('application');
import * as Connectivity from 'tns-core-modules/connectivity';
import { AppURL, handleOpenURL } from 'nativescript-urlhandler';
import { RouterExtensions } from 'nativescript-angular';
let application = require('application');

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private routerExtensions: RouterExtensions) {
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
    let Toast = android.widget.Toast;
    let d = Toast.LENGTH_SHORT;

    let centeredText = new android.text.SpannableString(text);
    centeredText.setSpan(
      new android.text.style.AlignmentSpan.Standard(android.text.Layout.Alignment.ALIGN_CENTER),
      0,
      text.length - 1,
      android.text.Spannable.SPAN_INCLUSIVE_INCLUSIVE);

    Toast.makeText(application.android.context, <any>centeredText, d).show();
  }

  monitorConnectivity() {
    Connectivity.startMonitoring((newConnectionType: number) => {
      this.checkConnectivity();
    });
  }

  checkConnectivity() {
    const connectionType = Connectivity.getConnectionType();

    switch (connectionType) {
      case Connectivity.connectionType.none:
        this.toast('No hay conexión a internet, necesitas conexión para ver el contenido')
        break;
      case Connectivity.connectionType.wifi:
        break;
      case Connectivity.connectionType.mobile:
        break;
    }
  }

  thereIsConnection() {
    return !!Connectivity.getConnectionType();
  }


  cancelCheckConnectivity() {
    Connectivity.stopMonitoring();
  }

  handleOpenUrl() {
    handleOpenURL((appURL: AppURL) => {
      console.log('Got the following appURL', appURL);

      const parts = appURL.path.split('calvillo.com.mx');
      if (parts.length === 2) {
        console.log('Navigating to: ', parts[1]);
        this.routerExtensions.navigateByUrl(parts[1]);
      }
    });
  }
}
