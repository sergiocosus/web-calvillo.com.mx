import { Injectable } from '@angular/core';
import {ApiHttp} from '../../shared/api-http.service';
import {Directory} from '../directory.model';

@Injectable()
export class DirectoryService {

  constructor(private apiHttp: ApiHttp) { }

  post(data) {
    return this.apiHttp.post('directory', data)
      .map(json => new Directory().parse(json.directory));
  }

}
