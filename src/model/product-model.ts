export interface ProductModel {
  prod_id: string;
  name: string;
  category: string;
  prod_img: string;
  product_code:string;
  brand: string;
  sold_by:string;
  price: number;
  sell_price:number
  discount: number;
  description:Array<string>;
  userid:number;
  quantity:number;
  size:number
}

interface Stock{
  prize:number;
  selling_prize:number;
  discount:number;
  stock:number
}