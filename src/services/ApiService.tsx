// This is a Service to mock intertactivity with a server
import ProductsData from 'mock-data/products';
import UsersData from 'mock-data/users';
import { Product, User, Purchase, Coupon } from 'types/types.d';
import faker from 'faker';

/* Generally these would be calls to an endpoint defined in
a config file. Because we do not need a persistent data
layer, we are mocking API functionality by returning
expected API responses instead */

/* Example if server was available */
// export function getProducts(count: number) {
//   return (
//     fetch(`${REACT_APP_API_ENDPOINT}/products`)
//       .then(response => response.json())
//       .then(products => {
//         return products.json()
//       })
//       .catch(e => {
//         console.log(e);
//       })
//   );
// }

// Get a set amount of products
export function getProducts(count: number): Product[] {
  const products = ProductsData.generateProducts(count);
  console.log(`GET /products`);
  console.log(products);
  return products;
}

// Get a set amount of users
export function getUsers(count: number): User[] {
  const users = UsersData.generateUsers(count);
  console.log(`GET /users`);
  console.log(users);
  return users;
}

// Make a purchase
export function makePurchase(productId: string, userId: string, coupon?: Coupon): Purchase | void {
  let purchaseId = faker.random.uuid();

  // Validate if user applied coupon
  let couponApplied: boolean;
  let couponCode: string | null;
  if ( coupon ) {
    couponApplied = true;
    couponCode = coupon.code;
  } else {
    couponApplied = false
    couponCode = null;
  }

  const purchase: Purchase = {
    id: purchaseId,
    productId: productId,
    userId: userId,
    datePurchased: new Date(),
    couponApplied: couponApplied,
    couponCode: couponCode
  };

  console.log(`POST /purchase`);
  console.log(purchase);
  return purchase;
}

/* This sort of functionality would exist on the server
I imagine the server will respond with a property
in the response after a successful purchase if the user
was granted the coupon */

// Spoofing a server check for if the customer should receive a coupon
export function checkGrantCoupon(purchases: number, interval: number): boolean {
  return purchases % interval === 0 && purchases >= interval;
}

// Spoofing a server check if coupon is the current active promotion
export function validateCoupon(coupon: string | null, current: string): boolean {
  return coupon === current;
}

export default {
  getProducts: getProducts,
  getUsers: getUsers,
  makePurchase: makePurchase,
  checkGrantCoupon: checkGrantCoupon,
  validateCoupon: validateCoupon
};