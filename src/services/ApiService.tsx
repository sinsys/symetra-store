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
export function makePurchase(productId: string, userId: string, coupon?: Coupon): Purchase {
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

  console.log(`POST /purchases`);
  console.log(purchase);
  return purchase;
}

// Admin Reports
/* Because the data is stored in context, we are just passing it
in as a prob as its already readily available in the component
state. These would actually hit an endpoint in a real-world
scenario */
export function getAllPurchases(data: Purchase[]): Purchase[] {
  console.log(`GET /purchases`);
  console.log(data);
  return data;
}

export function getCouponPurchases(data: Purchase[]): Purchase[] {
  const couponPurchases = data.filter(purchase => purchase.couponApplied);
  console.log(`GET /purchases?coupon=true`);
  console.log(couponPurchases);
  return couponPurchases;
}

export function updateCouponInterval(data: number): { success: boolean, interval: number } {
  const interval = { interval: data };
  console.log(`PATCH /admin/coupon-interval`);
  console.log(interval);
  return { success: true, interval: data };
};

export function updateCouponCode(data: string): { success: boolean, code: string } {
  const code = { code: data };
  console.log(`PATCH /admin/coupon-code`);
  console.log(code);
  return { success: true, code: data };
};

/* This sort of functionality would exist on the server
I imagine the server will respond with a property
in the response after a successful purchase if the user
was granted the coupon */

// Spoofing a server check for if the customer should receive a coupon
export function checkGrantCoupon(purchases: number, interval: number): boolean {
  // This should be refactored once a real API is in place.
  // It is unclear if we want the counter to restart to 0
  // when the interval is changed, or maintain the comparison
  // to total orders
  return purchases % interval === 0 && purchases >= interval;
}

// Spoofing a server check if coupon is the current active promotion
export function validateCoupon(coupon: string | null, current: string): boolean {
  return coupon === current;
}

export default {
  getProducts: getProducts,
  getUsers: getUsers,

  getAllPurchases: getAllPurchases,
  getCouponPurchases: getCouponPurchases,

  updateCouponInterval: updateCouponInterval,
  updateCouponCode: updateCouponCode,
  
  makePurchase: makePurchase,
  checkGrantCoupon: checkGrantCoupon,
  validateCoupon: validateCoupon
};