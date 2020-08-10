export interface IProduct {
  id: string;
  productId?: number;
  uid?: string;
  name?: string;
  adminId?: string;
  price?: string;
  priceDiscount?: string;
  discountPercent? :string;
  isNew? : boolean
  imgUrl?: string
  imgUrlMob?: string;
  theme?:any
}
