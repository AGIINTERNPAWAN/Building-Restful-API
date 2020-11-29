const express = require('express');
const app = express();
const productRoutes = require('./api/routes/products');
const orderRoutes = require( './api/routes/orders');
const feedbackRoutes = require( './api/routes/feedbacks');
const home = require( './api/routes/main');
const bodyParser = require('body-parser');
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

app.use (express.json()) // using json format for database schema
app.use('/',home);
// app.use('/products', productRoutes);
app.post('/feedbacks', feedbackRoutes.create);
app.get('/feedbacks', feedbackRoutes.findAll);
// app.use('/orders', orderRoutes);
module.exports = app;