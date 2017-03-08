import {Model} from '../shared/classes/model';
import {ImageableModel} from '../shared/classes/imageable.model';
import {Picture} from '../picture/picture.model';
import {Directory} from '../directory/directory.model';
import {Video} from '../video/video.model';

export class Category extends ImageableModel{
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

  category: Category;
  categories: Category[];
  pictures: Picture[];
  videos: Video[];
  directories: Directory[];

  get routerLink() {
    return '/galeria/' + this.id;
  }

  parse(obj): any {
    let category = super.parse(obj);

    if (this.category) {
      this.category = new Category().parse(this.category);
    }

    if (this.categories) {
      this.categories = Category.parseArray(this.categories);
    }

    if (this.pictures) {
      this.pictures = Picture.parseArray(this.pictures);
    }

    if (this.videos) {
      this.videos = Video.parseArray(this.videos);
    }

    if (this.directories) {
      this.directories = Directory.parseArray(this.directories);
    }

    return category;
  }

  static parseArray(objs:any[]):Category[] {
    return objs.map(obj => {return new Category().parse(obj)})
  }
}
