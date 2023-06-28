import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  productId="";
  activeProduct :any=[]


  constructor(private routerObj:ActivatedRoute , private serviceObj : ProductService ){

  }
  ngOnInit(): void {
    this.productId = this.routerObj.snapshot.params['id'];
    this.serviceObj.getProductsById(this.productId).subscribe(
      (response)=>{
        this.activeProduct= response;
      }
    )
  }
}
