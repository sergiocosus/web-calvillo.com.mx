import { DirectoryPageModule } from './directory-page.module';

describe('DirectoryPageModule', () => {
  let directoryPageModule: DirectoryPageModule;

  beforeEach(() => {
    directoryPageModule = new DirectoryPageModule();
  });

  it('should create an instance', () => {
    expect(directoryPageModule).toBeTruthy();
  });
});
