export interface ProductModel {
  id: string;
  name: string;
  category: string;
  prod_img: string;
  product_code:string;
  brand: string;
  sold_by:string;
  price: number;
  discount: number;
  sizes:any;
  description:Array<string>;
}
