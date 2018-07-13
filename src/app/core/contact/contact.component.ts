import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

declare var window: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  adSenseEnabled = environment.adSenseEnabled;

  constructor() {
  }

  ngOnInit() {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }

}
