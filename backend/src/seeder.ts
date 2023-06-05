import mongoose from 'mongoose';
import 'dotenv/config';
import users from './data/user.seed.js';
import products from './data/product.seed.js';
import User from './models/user/user.model.js';
import Product from './models/product/product.model.js';
import Order from './models/order/order.model.js';
import connectDB from './config/db.js';

connectDB();

async function importData() {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }));
    await Product.insertMany(sampleProducts);
    console.log('Data imported');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

async function destroyData() {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
