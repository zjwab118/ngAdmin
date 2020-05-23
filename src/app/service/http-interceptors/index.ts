import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonInterceptor } from './common';

export const httpInterceptorProvides = [
  { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true }
];
