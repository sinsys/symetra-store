// Creates fake data for use on this demo eCommerce site
// It is intended to demonstrate scalability
import faker from 'faker';
import { Product } from './types.d';

// Generates data about products
const ProductsData = {

  // Generates a set number of random products
  generateProducts: (count: number): Array<Product> => {
    const mockProducts = [];
    for ( let i=0; i<count; i++) {
      const mockProduct:Product = {
        id: faker.random.uuid(),
        name: faker.random.words(4),
        price: faker.random.number({min: 1, max: 2000, precision: 0.01}).toFixed(2),
        details: faker.lorem.paragraph(4)
      };
      mockProducts.push(mockProduct);
    }
    return mockProducts;
  }

}

export default ProductsData;