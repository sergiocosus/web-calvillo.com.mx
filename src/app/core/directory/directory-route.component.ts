import { Component, OnInit } from '@angular/core';
import { AutoUnsubscribe } from '../../shared/classes/auto-unsubscribe';
import { SubscriptionManager } from '../../shared/classes/subscription-manager';
import { Directory } from '@calvillo/api';
import { ActivatedRoute, Router } from '@angular/router';
import { DirectoryService } from '@calvillo/api';
import { AppMetaService } from '../../shared/services/app-meta.service';

@Component({
  selector: 'app-directory-route',
  templateUrl: './directory-route.component.html',
  styleUrls: ['./directory-route.component.scss']
})
@AutoUnsubscribe()
export class DirectoryRouteComponent implements OnInit {
  directory_link: string;
  directory: Directory;
  private sub = new SubscriptionManager;

  constructor(private activatedRoute: ActivatedRoute,
              private directoryService: DirectoryService,
              private router: Router,
              private meta: AppMetaService) {
  }

  ngOnInit() {
    this.checkRoute();
  }

  checkRoute() {
    this.sub.add = this.activatedRoute.children[0].params.subscribe(
      route => {
        if (route['directory_link'] && route['directory_link'] !== this.directory_link) {
          this.loadDirectory(route['directory_link']);
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
        this.updateMetaTags();
      },
      error => this.redirectToDirectory.bind(this)
    );
  }

  redirectToDirectory() {
    this.router.navigateByUrl('/galeria/directorio');
  }


  updateMetaTags() {
    this.meta.update(this.directory.title,
      this.directory.description.replace(/<(?:.|\n)*?>/gm, ''),
      this.directory.imageUrl('xlg')
    );
  }
}
