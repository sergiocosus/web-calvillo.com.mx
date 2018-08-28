import { Component, Input, OnInit } from '@angular/core';
import { Directory } from '@calvillo/api';
import { UtilsService } from '~/shared/services/utils.service';


@Component({
  selector: 'app-directory-data',
  moduleId: module.id,
  templateUrl: './directory-data.component.html',
  styleUrls: ['./directory-data.component.scss']
})
export class DirectoryDataComponent implements OnInit {
  @Input() directory: Directory;
  @Input() showImage = false;

  constructor(public utilsService: UtilsService) { }

  ngOnInit() {
  }

  openUrl(url) {
    this.utilsService.openUrl(url);
  }

  dial(number) {
    this.utilsService.dialPhone(number);
  }
}
