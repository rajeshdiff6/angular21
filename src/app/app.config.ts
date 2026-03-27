import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { GLOBAL_SERVICEA } from './injectiontoken/injection-tokens';
import { ServiceA } from './services/service-a';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from './interceptors/logging-interceptor';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { provideStore } from '@ngrx/store';
import { postsReducer } from './components/posts/post.reducer';
import { provideEffects } from '@ngrx/effects';
import { PostsEffects } from './components/posts/posts.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({
      posts: postsReducer
    }),
    provideEffects([PostsEffects]),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: GLOBAL_SERVICEA, useExisting: ServiceA},
    provideHttpClient(withInterceptors([loggingInterceptor, TokenInterceptor]))
  ]
};
