import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../product.service';
import {Products} from '../products.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId: number;

  product :Products;

  constructor(private route: ActivatedRoute, private productService: ProductService) {

  }
    ngOnInit(){
      this.route.paramMap.subscribe((param:ParamMap)=>{
        this.productId=parseInt(param.get('id'))
      })
      this.productService.getProductId()
        .subscribe(data=>{
         this.product=data;
      })
    }


}

