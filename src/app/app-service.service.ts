import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  GetProductsList() {
    return this.http.get('https://triograph.com/Products/phpi-rest-api-crud')
  }

  addProduct() {
    const httpOptions = {
      "applicaiton-type": "application/json"
    };
    return this.http.post('https://triograph.com/Products/api-create.php',httpOptions);
  }
}
;