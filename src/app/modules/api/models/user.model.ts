import { Model } from './model';

export class User extends Model {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;

  static parseArray(objs: any[]): User[] {
    return objs.map(obj => {
      return new User().parse(obj)
    })
  }
}
