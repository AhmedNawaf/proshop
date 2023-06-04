import { TUser } from '../models/user/user.model.js';
import bcrypt from 'bcrypt';

const users: TUser[] = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'John Doe',
    email: 'test@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default users;
