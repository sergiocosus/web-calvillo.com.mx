import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ng2-bootstrap';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;

  email: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  open() {
    this.modal.show();
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      success => {
        this.modal.hide();
      }
    );
  }
}
