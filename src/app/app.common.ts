import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from './shared/shared.module';


export const SHARED_MODULES: any[] = [
  AppRoutingModule,
  SharedModule.forRoot(),
];

export * from './app-routing.module';
