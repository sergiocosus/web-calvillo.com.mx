import { Injectable } from '@angular/core';
import * as moment from 'moment';

declare let EXIF;

@Injectable()
export class EXIFService {

  constructor() {
  }

  getDateTimeFromPicture(base64) {
    try {
      let exif = this.readEXIFFromBase64(base64);
      console.log(exif);
      if (exif.DateTime) {
        let dateTime = moment(exif.DateTimeOriginal, 'YYYY:MM:DD hh:mm:ss');
        return dateTime as any;
      }
    } catch (e) {
      console.error('Error getting datetime from exif', e);
    }
    return null;
  }

  readEXIFFromBase64(base64Image) {
    let arrayBuffer = this.base64ToArrayBuffer(base64Image);
    return EXIF.readFromBinaryFile(arrayBuffer);
  }

  private base64ToArrayBuffer(base64) {
    base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
    var binary = atob(base64);
    var len = binary.length;
    var buffer = new ArrayBuffer(len);
    var view = new Uint8Array(buffer);
    for (var i = 0; i < len; i++) {
      view[i] = binary.charCodeAt(i);
    }
    return buffer;
  }
}
