import { EventsPageModule } from './events-page.module';

describe('EventsPageModule', () => {
  let eventsPageModule: EventsPageModule;

  beforeEach(() => {
    eventsPageModule = new EventsPageModule();
  });

  it('should create an instance', () => {
    expect(eventsPageModule).toBeTruthy();
  });
});
