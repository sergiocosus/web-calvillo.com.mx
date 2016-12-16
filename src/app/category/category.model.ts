import {Model} from '../shared/classes/model';

export class Category extends Model{
  id: number;
  title: string;
  link: string;
  image_code: string;
  image_url: string;
  description: string;
  category_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;

  categories: Category[];

  parse(obj): any {
    let category = super.parse(obj);

    if (this.categories) {
      this.categories = Category.parseArray(this.categories);
    }

    return category;
  }

  image(size = null) {
    if (size) {
      return this.image_url + '_' + size;
    } else {
      return this.image_url;
    }
  }

  static parseArray(objs:any[]):Category[] {
    return objs.map(obj => {return new Category().parse(obj)})
  }
}
