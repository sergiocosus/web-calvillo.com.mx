import { Component, OnInit } from '@angular/core';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-ad-thumb',
  templateUrl: './ad-thumb.component.html',
  styleUrls: ['./ad-thumb.component.scss']
})
export class AdThumbComponent implements OnInit {
  adSenseEnabled = environment.adSenseEnabled;

  constructor() {
  }

  ngOnInit() {
  }

}
