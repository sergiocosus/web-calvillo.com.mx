import {Model} from './model';
export abstract class ImageableModel extends Model{
  image_url: string;

  imageUrl(size = null) {
    if (size) {
      return this.image_url + '_' + size;
    } else {
      return this.image_url;
    }
  }
}
