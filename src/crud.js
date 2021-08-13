const express = require('express');
// yarn add uuidv4
const {uuid} = require('uuidv4');

const app = express();

app.use(express.json());

const products = [];

// list
app.get('/products', (request, response) => {
  const { name } = request.query;

  const results = name 
  ? products.filter(prod => prod.name === name)
  : products;

  return response.json(results);
});

// show
app.get('/products/:id', (request, response) => {
  const { id } = request.params;

  const productIndex = products.findIndex(prod => prod.id === id);
  
  if (productIndex < 0) {
    return response.status(400).json({ error: "Product not found"});
  }

  const product = products[productIndex];

  return response.json(product);
});

// add
app.post('/products', (request, response) => {
  const { name, price } = request.body;

  const product = {id: uuid(), name, price};

  products.push(product);
  
  return response.json(product);
});

// update
app.put('/products/:id', (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;

  const productIndex = products.findIndex(prod => prod.id === id);
  
  if (productIndex < 0) {
    return response.status(400).json({ error: "Product not found"});
  }

  const product = {
    id,
    name,
    price
  };

  products[productIndex] = product;

  return response.json(product);
});

// delete
app.delete('/products/:id', (request, response) => {
  const { id } = request.params;

  const productIndex = products.findIndex(prod => prod.id === id);
  
  if (productIndex < 0) {
    return response.status(400).json({ error: "Product not found"});
  }

  products.splice(productIndex, 1);

  return response.status(200).send();
});

app.listen(3333, () => {
  console.log('🚀 Back-end started!');
});