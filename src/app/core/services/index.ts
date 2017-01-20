import { ChaptersApiService } from './chapters-api.service';
import { GenericHttpService } from './generic-http.service';
import { GenericLocalStorageService } from './generic-localStorage.service';

export * from './chapters-api.service';
export * from './generic-http.service';
export * from './generic-localStorage.service';

export const appServices = [
  ChaptersApiService,
  GenericHttpService,
  GenericLocalStorageService
];
