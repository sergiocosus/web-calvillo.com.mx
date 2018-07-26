import { Component, OnInit } from '@angular/core';
import { Directory, DirectoryService } from '@calvillo/api';
import { RouterExtensions } from 'nativescript-angular';
import { PageRoute } from 'nativescript-angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-directory-page',
  moduleId: module.id,
  templateUrl: './directory-page.component.html',
  styleUrls: ['./directory-page.component.scss']
})
export class DirectoryPageComponent implements OnInit {
  directory: Directory;
  directory_link: string;

  constructor(private pageRoute: PageRoute,
              private directoryService: DirectoryService,
              private routerExtensions: RouterExtensions) {
  }

  ngOnInit() {
    this.checkRoute();
  }

  checkRoute() {
    this.pageRoute.activatedRoute.pipe(
      switchMap(activatedRoute => activatedRoute.paramMap)
    ).subscribe(
      params => {
        if (params.get('directoryLink') && params.get('directoryLink') !== this.directory_link) {
          this.loadDirectory(params.get('directoryLink'));
        } else {
          this.redirectToDirectory();
        }
      }
    );
  }

  loadDirectory(directory_link: string) {
    this.directory_link = directory_link;
    this.directoryService.getByLink(directory_link).subscribe(
      directory => {
        this.directory = directory;
      },
      error => this.redirectToDirectory.bind(this)
    );
  }

  redirectToDirectory() {
    this.routerExtensions.navigateByUrl('/galeria/directorio');
  }

}
