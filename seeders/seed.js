const sequelize = require('../config/database');
const Product = require('../models/Product');

const seedProducts = async () => {
  await sequelize.sync({ force: true });

  await Product.bulkCreate([
    { name: 'Refrigerador LG', brand: 'LG', price: 500.00, stock: 15 },
    { name: 'Lavadora Samsung', brand: 'Samsung', price: 450.00, stock: 10 },
    { name: 'Horno Microondas Panasonic', brand: 'Panasonic', price: 120.00, stock: 20 },
  ]);

  console.log('Datos insertados.');
  process.exit();
};

seedProducts();
