import { ImageableModel } from './imageable.model';

export class Video extends ImageableModel {
  id: number;
  title: string;
  link: string;
  image_code: string;
  youtube_id: string;
  description: string;
  latitude: number;
  longitude: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;

  static parseArray(objs: any[]): Video[] {
    return objs.map(obj => {
      return new Video().parse(obj)
    })
  }
}
