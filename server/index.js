const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct')

const app = express();

const PORT = 3002;



app.get('/api/getProducts', getProducts);
app.get('/api/product/:id', getProduct);


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});

// const express = require('express');
// const getProducts = require('./getProducts');
// const getProduct = require('./getProduct');

// const app = express();

// const PORT = 3002;

// app.get('/api/products', getProducts);
// app.get('/api/product/:id', getProduct);

// app.listen(PORT, () => {
//     console.log(`Server listening on port: ${PORT}`);
// });