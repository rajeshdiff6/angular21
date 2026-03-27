import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceA {
  public data: string = '';
  http = inject(HttpClient);

  public searchAPI(searchTerm: any) {
    console.log(searchTerm);
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
