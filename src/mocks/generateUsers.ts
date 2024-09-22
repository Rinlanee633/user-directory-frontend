import { faker } from '@faker-js/faker';
import { User } from '../models/User';
   
const generateUser = (): User => {
    const roles = ['Admin', 'User'];
    const statusList = ['Active', 'Inactive'];
    
    return {
        id: faker.database.mongodbObjectId(),
        name: faker.person.firstName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address: faker.location.streetAddress(),
        role: roles[Math.floor(Math.random() * roles.length)],
        username: faker.internet.userName(),
        joinDate: faker.date.past(),
        status: statusList[Math.floor(Math.random() * statusList.length)],
    };
};
  
export const generateUsers = (count: number): User[] => {
    return Array.from({ length: count }, generateUser);
};
