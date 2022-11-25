import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  productForm!: FormGroup;
  submitted: boolean = false;
  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      product_id: new FormControl(''),
      product_name: new FormControl(''),
      product_price: new FormControl(''),
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log('this.productForm.value : ', this.productForm.value);
    this.appService.addProduct(this.productForm.value).subscribe(data => {
      console.log(data);
    },
    (err) => {
      console.log(err);
    }
    );
  }
}
