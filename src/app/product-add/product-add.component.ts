import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  productForm:FormGroup;
  product:Product=new Product();
  constructor(private formBuilder:FormBuilder,private service:ProductService,private toastr: ToastrService) { }

  ngOnInit() {
    this.productForm=this.formBuilder.group({
      pname:['',Validators.compose([Validators.required])],
      pdesc:['',Validators.compose([Validators.required])],
      price:['',Validators.compose([Validators.required])],
      pdate:['',Validators.compose([Validators.required])]
    });
  }
  addProduct(){
    this.product.pname=this.productForm.controls.pname.value;
    this.product.pdesc=this.productForm.controls.pdesc.value;
    this.product.price=this.productForm.controls.price.value;
    this.product.pdate=this.productForm.controls.pdate.value;

    this.service.addProduct(this.product).subscribe();
    this.ngOnInit();
    this.toastr.success('Success :)','Added Successfully');
  }
  

}
