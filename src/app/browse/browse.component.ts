import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  schoolId !:string
  productCount = 0;
  productList :any=[];

  
  constructor(private router: ActivatedRoute, private prodObj :ProductService){

  }
  ngOnInit(): void {
    this.schoolId = this.router.snapshot.params['id'];
    this.prodObj.getProductsByCategory(this.schoolId).subscribe(
      (response)=>{
        this.productList=response;
        this.productCount = response.length;
      }
    )
  }
}
