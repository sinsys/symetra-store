// Tests for generating random data
import UsersData from './users';
import ProductsData from './products';

describe('Mock Data Generation', () => {
  // Test Users Generation
  it(`User generation generates 10 users`, () => {
    const users = UsersData.generateUsers(10);
    expect(users).toHaveLength(10);
    users.forEach(user => {
      expect(typeof user.name).toBe('string');
      expect(typeof user.id).toBe('string');
      expect(typeof user.purchases).toBe('object');
      expect(user.hasCoupon).toBeFalsy();
    })
  });

  // Test Products Generation
  it(`Product generation generates 10 products`, () => {
    const products = ProductsData.generateProducts(10);
    expect(products).toHaveLength(10);
    products.forEach(product => {
      expect(typeof product.name).toBe('string');
      expect(typeof product.id).toBe('string');
      expect(typeof product.price).toBe('number');
      expect(typeof product.details).toBe('string');
    })
  });
})
