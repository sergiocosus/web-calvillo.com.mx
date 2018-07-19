import { PictureGalleryPageModule } from './picture-gallery-page.module';

describe('PictureGalleryPageModule', () => {
  let pictureGalleryPageModule: PictureGalleryPageModule;

  beforeEach(() => {
    pictureGalleryPageModule = new PictureGalleryPageModule();
  });

  it('should create an instance', () => {
    expect(pictureGalleryPageModule).toBeTruthy();
  });
});
