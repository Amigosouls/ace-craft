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
  sortParam: any;
  sortOrder: any;
  sortingOption: any;
  
  getSortedList(event:any){
    this.sortingOption = event.target.value;
    if(this.sortingOption==='lth'){
      this.sortParam = 'price',
      this.sortOrder = 'asc'
    }
    else if (this.sortingOption === 'htl') {
      (this.sortParam = 'price'), (this.sortOrder = 'desc');
    } else if (this.sortingOption === 'nasc') {
      (this.sortParam = 'name'), (this.sortOrder = 'asc');
    } else if (this.sortingOption === 'ndesc') {
      (this.sortParam = 'name'), (this.sortOrder = 'desc');
    }
  }


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
