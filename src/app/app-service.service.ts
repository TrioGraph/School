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

  addProduct(productDetail: any) {
    const httpOptions = {
      "applicaiton-type": "application/json"
    };
    console.log('Service : productDetail : ', productDetail);
    console.log('Service : productDetail.product_name : ', productDetail.product_name);
    console.log('Service : productDetail.product_price : ', productDetail.product_price);
    return this.http.post('https://triograph.com/Products/api-create.php?name='+ productDetail.product_name + '&price='+ productDetail.product_price, httpOptions);
  }

  deleteProduct(id: any) {
    const httpOptions = {
      "applicaiton-type": "application/json"
    };
    return this.http.post('https://triograph.com/Products/api-delete.php?id=' + id,httpOptions);
  }
}
;