import { ImageableModel } from './imageable.model';
import { Category } from './category.model';
import { Directory } from './directory.model';
import { Picture } from './picture.model';

// @dynamic
export class Event extends ImageableModel {
  id: number;
  title: string;
  slug: string;
  image_code: string;
  description: string;
  address: string;
  begin_at: Date;
  end_at: Date;
  notify_at: Date;
  latitude: number;
  longitude: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;

  categories: Category[];
  directories: Directory[];
  pictures: Picture[];

  static parseArray(objs: any[]): Event[] {
    return objs.map(obj => new Event().parse(obj))
  }

  parse(obj): any {
    super.parse(obj);

    if (this.categories) {
      this.categories = Category.parseArray(this.categories);
    }
    if (this.directories) {
      this.directories = Directory.parseArray(this.directories);
    }
    if (this.pictures) {
      this.pictures = Picture.parseArray(this.pictures);
    }

    return this;
  }


  getRouterLink() {
    return '/eventos/' + this.slug;
  }

}
