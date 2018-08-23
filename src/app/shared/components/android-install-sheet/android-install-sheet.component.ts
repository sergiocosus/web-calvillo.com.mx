import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-android-install-sheet',
  templateUrl: './android-install-sheet.component.html',
  styleUrls: ['./android-install-sheet.component.scss']
})
export class AndroidInstallSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<AndroidInstallSheetComponent>) { }

  ngOnInit() {
  }

}
