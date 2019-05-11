import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService, User } from '@calvillo/api';

@Directive({
  selector: '[appIfLogged]'
})
export class IfLoggedDirective {
  toBeLogged;
  private user: User;

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
    if ((!!this.user) === this.toBeLogged) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
