import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../auth.service';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService,
              private dialog: MdDialogRef<LoginModalComponent>) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      success => {
        this.dialog.close();
      }
    );
  }
}
