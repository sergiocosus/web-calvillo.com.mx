import { Injectable } from '@angular/core';
declare let EXIF;

@Injectable()
export class EXIFService {

  constructor() { }

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
