const express = require('express');

const app = express();

app.get('/products', (request, response) => {
  return response.json([
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4"
  ]);
});

app.post('/products', (request, response) => {
  return response.json([
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4"
  ]);
});

app.put('/products/:id', (request, response) => {
  return response.json([
    "Product 10",
    "Product 2",
    "Product 3",
    "Product 4"
  ]);
});

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