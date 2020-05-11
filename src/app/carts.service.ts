import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseURL = 'http://localhost:4200';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  constructor(private httpClient: HttpClient) {}

  getCart() {
    return this.httpClient.get(baseURL, {
      responseType: 'json',
    });
  }
  getID(id) {
    if (id != 0) {
      return this.httpClient.get(`${baseURL}/${id}`);
    }
    if (id === 0) {
      return 'ID not found, 404';
    }
  }
  postCart(data) {
    return this.httpClient.post(baseURL, data`201`);
  }
  putCart(id, data) {
    return this.httpClient.put(`${baseURL}/${id}, 200`, data);
  }
  deleteCart(id) {
    return this.httpClient.delete(`${baseURL}/${id}, 204`);
  }
}
// For above, how do we add a response other than json? EG, response code 200/201/400 etc.
