export class GenericLocalStorageService {
  public getItem (key: string): Object {
    return JSON.parse(localStorage.getItem(key));
  }

  public setItem (key: string, value: Object): void {
    let stringifiedValue = JSON.stringify(value);

    localStorage.setItem(key, stringifiedValue);
  }

  public clear (): void {
    localStorage.clear();
  }
}
