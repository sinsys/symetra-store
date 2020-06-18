// This is a Service to mock intertactivity with a server
import ProductsData from 'mock-data/products';
import UsersData from 'mock-data/users';
import { Product, User, Purchase } from 'types/types.d';
import faker from 'faker';

export function getProducts(count: number): Product[] {
  const products = ProductsData.generateProducts(count);
  return products;
}

export function getUsers(count: number): User[] {
  const users = UsersData.generateUsers(count);
  return users;
}

export function makePurchase(productId: string, userId: string, discount: boolean): Purchase | void {
  let purchaseId = faker.random.uuid();
  const purchase: Purchase = {
    id: purchaseId,
    productId: productId,
    userId: userId,
    datePurchased: new Date()
  };
  return purchase;
}

export default {
  getProducts: getProducts,
  getUsers: getUsers,
  makePurchase: makePurchase
};