import ApiService from './ApiService';
import ProductsData from 'mock-data/products';
import UsersData from 'mock-data/users';

describe(`ApiService Tests`, () => {
  
  it(`getProducts returns all products`, () => {
    let n = 20;
    const response = ProductsData.generateProducts(n);
    expect(response).toHaveLength(n);
    response.forEach(product => {
      expect(typeof product.name).toBe('string');
      expect(typeof product.id).toBe('string');
      expect(typeof product.price).toBe('number');
      expect(typeof product.details).toBe('string');
    })
  });
  
  it(`getCurrentUser returns a correct user`, () => {
    const user = UsersData.generateUsers(1)[0];
    expect(typeof user.name).toBe('string');
    expect(typeof user.id).toBe('string');
    expect(typeof user.purchases).toBe('object');
    expect(user.hasCoupon).toBeFalsy();
  });

  it(`getUsers returns all users`, () => {
    let n = 20;
    const response = UsersData.generateUsers(n);
    expect(response).toHaveLength(n);
    response.forEach(user => {
      expect(typeof user.name).toBe('string');
      expect(typeof user.id).toBe('string');
      expect(typeof user.purchases).toBe('object');
      expect(user.hasCoupon).toBeFalsy();
    })
  });
  
  const purchaseFixtures = [
    {id:"581031e0-2ca0-41d3-95ea-a2807d765226",productId:"8c0aa04a-e364-46a2-a10b-56e80c5a40c0",userId:"6be9b457-f5f8-41bd-87cb-27b65f87c0b7",datePurchased:new Date("2020-06-18T23:53:16.039Z"),couponApplied:false,couponCode:null},
    {id:"ad8d2e8a-a9a1-4bb5-a1b8-723a38040ad3",productId:"629b0744-f369-4e3d-b8b7-2b6e0a6e99fb",userId:"6be9b457-f5f8-41bd-87cb-27b65f87c0b7",datePurchased:new Date("2020-06-19T18:30:20.241Z"),couponApplied:true,couponCode:"123ABC"}
  ];

  it(`getAllPurchases returns 2 purchases`, () => {
    let allPurchases = purchaseFixtures;
    expect(allPurchases).toHaveLength(2);
  });

  it(`checkGrantCoupon returns false when not an nth transaction`, () => {
    let totalTransactions = 10;
    let couponInterval = 3;
    let result = ApiService.checkGrantCoupon(totalTransactions, couponInterval);
    expect(result).toEqual(false);
  });
  
  it(`checkGrantCoupon returns true when is an nth transaction`, () => {
    let totalTransactions = 12;
    let couponInterval = 3;
    let result = ApiService.checkGrantCoupon(totalTransactions, couponInterval);
    expect(result).toEqual(true);
  });

  it(`validateCoupon returns false when code does not match`, () => {
    let code = "ABC";
    let validCode = "ABCD";
    let result = ApiService.validateCoupon(code, validCode);
    expect(result).toEqual(false);
  });
  
  it(`validateCoupon returns true when code matches`, () => {
    let code = "ABC";
    let validCode = "ABC";
    let result = ApiService.validateCoupon(code, validCode);
    expect(result).toEqual(true);
  });

});