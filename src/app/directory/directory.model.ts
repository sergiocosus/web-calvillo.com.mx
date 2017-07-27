import {ImageableModel} from '../shared/classes/imageable.model';
import {Category} from '../category/category.model';

export class Directory extends ImageableModel{
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
  latitude: string;
  longitude: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  categories: Category[];


  parse(obj): any {
    super.parse(obj);

    if (this.categories) {
      this.categories = Category.parseArray(this.categories);
    }

    return this;
  }

  static parseArray(objs:any[]):Directory[] {
    return objs.map(obj => {return new Directory().parse(obj)})
  }

  getRouterLink(category: Category) {
    return category.routerLink ;
  }

}
