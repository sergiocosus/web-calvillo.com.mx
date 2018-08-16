import { Component, OnInit } from '@angular/core';
import { UtilsService } from '~/shared/services/utils.service';

@Component({
  selector: 'app-contact-page',
  moduleId: module.id,
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  directoryFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdce-BdGUowz8pBDIKnqCqiWBVWoUjPdMkZMbGgft47oD2yAQ/viewform';

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
  }

  openUrl(url) {
    this.utilsService.openUrl(url);
  }
  dial(phone) {
    this.utilsService.dialPhone(phone);
  }
}
