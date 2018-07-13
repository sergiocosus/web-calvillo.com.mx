import { Component, OnInit } from '@angular/core';
import { AuthService } from '@calvillo/api';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService,
              private dialog: MatDialogRef<LoginModalComponent>) {
  }

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
