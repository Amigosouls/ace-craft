export interface ProductModel {
  id: string;
  name: string;
  category: string;
  prod_img: string;
  stock:Stock;
  product_code:string;
  brand: string;
  sold_by:string;
  price: number;
  discount: number;
  sizes:any;
  description:Array<string>;
}

interface Stock{
  prize:number;
  selling_prize:number;
  discount:number;
  stock:number
}