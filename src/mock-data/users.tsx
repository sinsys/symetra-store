// Creates fake data for use on this demo eCommerce site
// It is intended to demonstrate scalability
import faker from 'faker';
import { User } from 'types/types.d';

// Generates data about users
const UsersData = {

  // Generates a set number of random products
  generateUsers: (count: number) => {
    const mockUsers = [];
    for ( let i=0; i<count; i++) {
      const mockUser: User = {
        id: faker.random.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        hasCoupon: false,
        couponCode: null,
        purchases: []
      };
      mockUsers.push(mockUser);
    }
    return mockUsers;
  }
  
}

export default UsersData;