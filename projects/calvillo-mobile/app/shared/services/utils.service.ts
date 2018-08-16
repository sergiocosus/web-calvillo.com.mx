import { Injectable } from '@angular/core';
import * as utils from 'tns-core-modules/utils/utils';
import Uri = android.net.Uri;
import Intent = android.content.Intent;
const app = require('application');

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
}
