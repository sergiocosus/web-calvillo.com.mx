import {ImageableModel} from '../shared/classes/imageable.model';
export class Picture extends ImageableModel{
  id: number;
  static parseArray(objs:any[]):Picture[] {
    return objs.map(obj => {return new Picture().parse(obj)})
  }
}
