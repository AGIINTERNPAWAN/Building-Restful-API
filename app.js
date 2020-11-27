const express = require('express');
const app = express();
const productRoutes = require('./api/routes/products');
const orderRoutes = require( './api/routes/orders');
const home = require( './api/routes/main');

app.use('/',home);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
module.exports = app;