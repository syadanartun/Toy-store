import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Products} from '../products.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Products[] =[];

  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit() {
    this.productService.getAllProducts()

      .subscribe(data=>{
        this.products=data;
      })

  }
   goToDetails(product){

    this.router.navigate(['products',product.id])
  }

}
