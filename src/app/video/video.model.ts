import {ImageableModel} from '../shared/classes/imageable.model';
export class Video extends ImageableModel{
  static parseArray(objs:any[]):Video[] {
    return objs.map(obj => {return new Video().parse(obj)})
  }
}
