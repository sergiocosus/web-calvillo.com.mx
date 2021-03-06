import { ImageableModel } from './imageable.model';
import { Category } from './category.model';

// @dynamic
export class Picture extends ImageableModel {
  id: number;
  title: string;
  link: string;
  image_code: string;
  description: string;
  latitude: number;
  longitude: number;
  taken_at: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;

  categories: Category[];

  get hasCoordinates() {
    return this.longitude && this.latitude;
  }

  static parseArray(objs: any[]): Picture[] {
    return objs.map(obj => {
      return new Picture().parse(obj)
    })
  }

  getRouterLink(category: Category) {
    return category.routerLink + '/foto/' + this.link;
  }

  parse(obj): any {
    super.parse(obj);
    if (this.categories) {
      this.categories = Category.parseArray(this.categories);
    }

    this.parseDates(['taken_at']);

    return this;
  }
}

export class PictureRequest extends Picture {
  src: string;
  image: string;
  category_id: number;
  linkUsed: boolean;
}
