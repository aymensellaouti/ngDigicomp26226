import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LoggerService } from './service/logger.service';
import { HelloService } from './service/hello.Service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // LoggerService,
    // HelloService
    // Je mets ce que je veux trouver dans mon menu
  ]
};
