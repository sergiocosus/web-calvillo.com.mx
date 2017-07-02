import {ImageableModel} from '../shared/classes/imageable.model';
import {Category} from '../category/category.model';

export class Picture extends ImageableModel{
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

  static parseArray(objs:any[]):Picture[] {
    return objs.map(obj => {return new Picture().parse(obj)})
  }

  getRouterLink(category: Category) {
    return category.routerLink +  '/foto/' + this.link;
  }
}

export class PictureRequest extends Picture{
  src: string;
  image: string;
  category_id: number;
  linkUsed: boolean;
}
