import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: any[];
  displayAddForm: boolean = false;
  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.appService.GetProductsList().subscribe((data: any) => {
      console.log('Data: ', data);
      this.products = data;
    });

   
  }

  addProduct() {
    // this.displayAddForm = !this.displayAddForm;
    // this.appService.addProduct().subscribe(data => {
    //   console.log(data);
    // },
    // (err) => {
    //   console.log(err);
    // }
    // );
  }

  deleteProoduct(productId: any) {
 // this.confirmationService.confirm({
    //     message: 'Are you sure that you want to perform this action?',
    //     accept: () => {
    //         //Actual logic to perform a confirmation
    //     }
    // });

    if(confirm("Are you sure to delete ")) {
      console.log("Implement delete functionality here");
      this.appService.deleteProduct(productId).subscribe(data => {
          alert('Deleted Successfully');
      });
    }

  }

 

}
