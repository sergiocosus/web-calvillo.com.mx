import {Directive, ViewContainerRef, TemplateRef, Input} from '@angular/core';
import {AuthService} from '../auth.service';
import {User} from '../../user/user.model';

@Directive({
  selector: '[appIfLogged]'
})
export class IfLoggedDirective {
  private user: User;
  toBeLogged;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService,
  ) {
    this.authService.getLoggedUser().subscribe(user => {
      this.user = user;
      this.check();
    });
  }


  @Input() set appIfLogged(toBeLogged) {
    this.toBeLogged = toBeLogged;
    this.check();
  }

  check() {
    if ((!!this.user) == this.toBeLogged) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}