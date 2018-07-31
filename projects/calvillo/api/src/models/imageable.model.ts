import { Model } from './model';

// @dynamic
export abstract class ImageableModel extends Model {
  image_url: string;
  image_code: string;

  imageUrl(size = null) {
    if (!this.image_code) {
      return null;
    }
    if (size) {
      return this.image_url + '_' + size;
    } else {
      return this.image_url;
    }
  }
}
