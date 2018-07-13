import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class AppMetaService {

  constructor(private title: Title,
              private meta: Meta) {
  }

  update(title: string, description: string, image) {
    this.title.setTitle(title);

    this.meta.updateTag({
      property: 'og:image',
      content: image
    });

    this.meta.updateTag({
      property: 'og:title',
      content: title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: description,
    });

    this.meta.updateTag({
      name: 'description',
      content: description,
    });
  }
}
