import {ImageableModel} from '../shared/classes/imageable.model';
export class Directory extends ImageableModel{
  static parseArray(objs:any[]):Directory[] {
    return objs.map(obj => {return new Directory().parse(obj)})
  }
}
