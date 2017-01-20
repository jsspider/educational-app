import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { GenericHttpService } from './generic-http.service';
import { GenericLocalStorageService } from './generic-localStorage.service';

@Injectable()
export class ChaptersApiService {
    private chaptersKey: string = 'ea-chapters';
    private mockedChaptersUrl: string = 'assets/mock-data/mock-data.json';

    constructor (
        private httpService: GenericHttpService,
        private localStorageService: GenericLocalStorageService) {}

    public getChapters(): Object {
        return this.localStorageService.getItem(this.chaptersKey);
    }

    public saveChapters(data: Object): void {
        this.localStorageService.setItem(this.chaptersKey, data);
    }

    public fetchChapters(): Observable<Object[]> {
        return this.httpService.get(this.mockedChaptersUrl);
    }
}
