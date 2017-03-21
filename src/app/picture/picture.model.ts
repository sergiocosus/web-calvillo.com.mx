import {ImageableModel} from '../shared/classes/imageable.model';

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
}
