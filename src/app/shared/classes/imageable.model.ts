import {Model} from './model';
export abstract class ImageableModel extends Model{
  image_url: string;

  imageUrl(size = null) {
    if (!this.image_url) {
      return null;
    }
    if (size) {
      return this.image_url + '_' + size;
    } else {
      return this.image_url;
    }
  }
}
