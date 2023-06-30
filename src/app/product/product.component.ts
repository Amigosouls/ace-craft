import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { ProductModel } from 'src/model/product-model';
import { CartService } from 'src/services/cart.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId = "";
  activeUserId = 0
  activeProduct: any = []
  size = 0;
  quantity=1

  constructor(private routerObj: ActivatedRoute, 
    private serviceObj: ProductService,
     private cartObj: CartService ,
     private userObj: UserService) {

  }
  cartproduct:ProductModel={
    prod_id :'',
    name:'',
    category:'',
    prod_img:'',
    product_code:'',
    brand:'',
    sold_by:'',
    price:0,
    sell_price:0,
    discount:0,
    description:[''],
    userid:0,
    quantity:0,
    size:0



  }

 
  ngOnInit(): void {
    this.productId = this.routerObj.snapshot.params['id'];
    this.serviceObj.getProductsById(this.productId).subscribe(
      (response) => {
        this.activeProduct = response;
      }
    )
    this.userObj.getActiveUser().subscribe(
      (response)=>{
        for (const user of response) {
          this.activeUserId = user.id
        }
      }
    )
  }
  addProduct(product: ProductModel) {
    this.cartproduct.prod_id=product.prod_id;
    this.cartproduct.name = product.name;
    this.cartproduct.category= product.category;
    this.cartproduct.prod_img= product.prod_img;
    this.cartproduct.brand = product.brand;
    this.cartproduct.sold_by = product.sold_by,
    this.cartproduct.price = product.price,
    this.cartproduct.sell_price=product.sell_price,
    this.cartproduct.discount= product.discount,
    this.cartproduct.userid = this.activeUserId,
    this.cartproduct.quantity = this.quantity;
    this.cartproduct.size=this.size;
    this.cartObj.postToCart(this.cartproduct)
    alert('item added to cart');
  }
}
