import { v4 as uuidv4 } from 'uuid';
import { IUser } from './types';
function populateUsers(users: IUser[]) {
  users.push({ id: uuidv4(), title: 'Mr', userName: 'john.keneddy@email.com.au', password: 'Password', firstName: 'John', lastName: 'Keneddy', gender: 'Male', dateOfBirth: new Date(1990, 1, 1) });
  users.push({ id: uuidv4(), title: 'Miss', userName: 'sandra.mist@email.com.au', password: 'Password', firstName: 'Sandra', lastName: 'Mist', gender: 'Female', dateOfBirth: new Date(1988, 4, 8) });
  users.push({ id: uuidv4(), title: 'Mrs', userName: 'rita.james@email.com.au', password: 'Password', firstName: 'Rita', lastName: 'James', gender: 'Female', dateOfBirth: new Date(1986, 11, 20) });
  users.push({ id: uuidv4(), title: 'Mr', userName: 'sam.peck@email.com.au', password: 'Password', firstName: 'Sam', lastName: 'Peck', gender: 'Other', dateOfBirth: new Date(1992, 5, 6) });
}

export { populateUsers };

