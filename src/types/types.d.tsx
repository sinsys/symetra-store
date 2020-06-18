export type User = {
  id: string;
  name: string;
  hasCoupon: boolean;
  purchases: Array<Purchase>
}

export type Product = {
  id: string;
  name: string;
  price: number;
  details: string;
}

export type Purchase = {
  id: string;
  product: string;
  datePurchased: Date;
}