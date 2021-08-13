const express = require('express');

const app = express();

// create
app.post('/products', (request, response) => {
  return response.json([
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4"
  ]);
});

// list
app.get('/products', (request, response) => {
  return response.json([
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4"
  ]);
});

// show
app.get('/products/:id', (request, response) => {
  return response.json("Product 1");
});

// update
app.put('/products/:id', (request, response) => {
  return response.json([
    "Product 10",
    "Product 2",
    "Product 3",
    "Product 4"
  ]);
});

// delete
app.delete('/products/:id', (request, response) => {
  return response.json([
    "Product 2",
    "Product 3",
    "Product 4"
  ]);
});

app.listen(3333, () => {
  console.log('🚀 Back-end started!');
});