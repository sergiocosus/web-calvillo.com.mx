import { ImageableModel } from './imageable.model';
import { Picture } from './picture.model';
import { Directory } from './directory.model';
import { Video } from './video.model';

export class Category extends ImageableModel {
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
  deleted_categories: Category[];
  related_categories: Category[];
  pictures: Picture[];
  deleted_pictures: Picture[];
  videos: Video[];
  directories: Directory[];
  deleted_directories: Directory[];

  get routerLink() {
    return '/galeria/' + this.link;
  }

  static parseArray(objs: any[]): Category[] {
    return objs.map(obj => {
      return new Category().parse(obj)
    })
  }

  parse(obj): any {
    let category = super.parse(obj);

    if (this.category) {
      this.category = new Category().parse(this.category);
    }

    if (this.categories) {
      this.categories = Category.parseArray(this.categories);
    }

    if (this.deleted_categories) {
      this.deleted_categories = Category.parseArray(this.deleted_categories);
    }

    if (this.related_categories) {
      this.related_categories = Category.parseArray(this.related_categories);
    }

    if (this.pictures) {
      this.pictures = Picture.parseArray(this.pictures);
    }

    if (this.deleted_pictures) {
      this.deleted_pictures = Picture.parseArray(this.deleted_pictures);
    }

    if (this.videos) {
      this.videos = Video.parseArray(this.videos);
    }

    if (this.directories) {
      this.directories = Directory.parseArray(this.directories);
    }

    if (this.deleted_directories) {
      this.deleted_directories = Directory.parseArray(this.deleted_directories);
    }

    return category;
  }
}
