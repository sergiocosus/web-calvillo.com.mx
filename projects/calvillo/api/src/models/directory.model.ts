import { ImageableModel } from './imageable.model';
import { Category } from './category.model';

// @dynamic
export class Directory extends ImageableModel {
  id: number;
  title: string;
  link: string;
  image_code: string;
  description: string;
  address: string;
  email: string;
  phone: string;
  cellphone: string;
  website_url: string;
  youtube_url: string;
  facebook_url: string;
  latitude: number;
  longitude: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  categories: Category[];
  related_directories: Directory[];

  static parseArray(objs: any[]): Directory[] {
    return objs.map(obj => {
      return new Directory().parse(obj)
    })
  }

  parse(obj): any {
    super.parse(obj);

    if (this.categories) {
      this.categories = Category.parseArray(this.categories);
    }

    if (this.related_directories) {
      this.related_directories = Directory.parseArray(this.related_directories);
    }

    return this;
  }


  getRouterLink(category: Category = null) {
    return '/directorio/' + this.link;
  }

}
