// This is a Service to interact with a server
import { Purchase, Coupon } from 'types/types.d';
import config from '../config';

// Get a set amount of products
export async function getProducts() {
  return fetch(`${config.API_ENDPOINT}/products`)
  // const products = ProductsData.generateProducts(count);
  // console.log(`GET /products`);
  // console.log(products);
  // return products;
}

// Get a set amount of users
export async function getUsers() {
  return fetch(`${config.API_ENDPOINT}/users`)
  // const users = UsersData.generateUsers(10);
  // console.log(`GET /users`);
  // console.log(users);
  // return users;
}

// Return a random user to log in with
export async function getCurrentUser() {
  return fetch(`${config.API_ENDPOINT}/users/random`)
  // const users = UsersData.generateUsers(10);
  // console.log(`GET /users`);
  // console.log(users);
  // return users;
}

export async function getAdminDetails() {
  return fetch(`${config.API_ENDPOINT}/admin`);
}

// Make a purchase
export async function makePurchase(productId: string, userId: string, coupon?: Coupon) {
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
    productId: productId,
    userId: userId,
    couponApplied: couponApplied,
    couponCode: couponCode
  };

  return fetch(`${config.API_ENDPOINT}/purchases`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(purchase)
  });
}

// Admin Reports
/* Because the data is stored in context, we are just passing it
in as a prob as its already readily available in the component
state. These would actually hit an endpoint in a real-world
scenario */
export async function getAllPurchases() {
  return fetch(`${config.API_ENDPOINT}/purchases`)
}

export async function getCouponPurchases() {
  return fetch(`${config.API_ENDPOINT}/purchases/coupon`)
}

export async function updateCouponInterval(couponInterval: number) {
  return fetch(`${config.API_ENDPOINT}/admin/interval`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ couponInterval })
  })
};

export async function updateCouponCode(couponCode: string) {
  return fetch(`${config.API_ENDPOINT}/admin/coupon`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ couponCode })
  })
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

  getAdminDetails: getAdminDetails,

  getProducts: getProducts,
  getUsers: getUsers,
  getCurrentUser: getCurrentUser,

  getAllPurchases: getAllPurchases,
  getCouponPurchases: getCouponPurchases,

  updateCouponInterval: updateCouponInterval,
  updateCouponCode: updateCouponCode,
  
  makePurchase: makePurchase,
  checkGrantCoupon: checkGrantCoupon,
  validateCoupon: validateCoupon
};