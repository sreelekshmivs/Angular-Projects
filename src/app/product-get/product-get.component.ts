import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.scss']
})
export class ProductGetComponent implements OnInit {
  public popoverTitle: string = 'Delete';
  public popoverMessage: string = 'Do you want to delete?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  product:Observable<Product>;
  products:Observable<Product[]>
 
  constructor(private productService:ProductService,
    private router:Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.product=this.productService.getProductList();
    this.products=this.productService.getProductList();

  }
  deleteProduct(id:number){
    
    
      this.productService.deleteProduct(id).subscribe(data=>{
        console.log(data);
        this.toastr.error('Oh No! :)','Deleted Successfully');
      })
    
  }

}
