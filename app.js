const express = require('express');
const app = express();
const cors = require('cors');
// const productRoutes = require('./api/routes/products');
// const orderRoutes = require( './api/routes/orders');
const feedbackRoutes = require( './api/routes/feedbacks');
const home = require( './api/routes/main');
const bodyParser = require('body-parser');
// app.use(
//     bodyParser.urlencoded({
//       extended: false
//     })
//   );app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
  });
// Data Parsing
app.use (bodyParser.json()) // using json format for database schema
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',home);
app.use('/feedbacks', feedbackRoutes);
app.use(cors());
// app.use('/products', productRoutes);
// app.post('/feedbacks', feedbackRoutes.create);
// app.get('/feedbacks', feedbackRoutes.findAll);
// app.use('/orders', orderRoutes);
module.exports = app;