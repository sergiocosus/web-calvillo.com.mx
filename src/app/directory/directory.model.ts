import {ImageableModel} from '../shared/classes/imageable.model';

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

  static parseArray(objs:any[]):Directory[] {
    return objs.map(obj => {return new Directory().parse(obj)})
  }

}
