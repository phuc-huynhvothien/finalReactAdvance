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
  urlImage?: string
  urlImageHover?: string;
  theme?:any
}
