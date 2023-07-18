const http = require('http');

const menProducts = [
  {
    id: 1,
    name: 'Product 1',
    category: 'Category 1',
    price: 10.99,
    quantity: 5,
    description: 'Dummy description for Product 1',
  },
  {
    id: 2,
    name: 'Product 2',
    category: 'Category 2',
    price: 19.99,
    quantity: 8,
    description: 'Dummy description for Product 2',
  },
  {
    id: 3,
    name: 'Product 3',
    category: 'Category 1',
    price: 15.99,
    quantity: 3,
    description: 'Dummy description for Product 3',
  },
  {
    id: 4,
    name: 'Product 4',
    category: 'Category 4',
    price: 20.99,
    quantity: 5,
    description: 'Dummy description for Product 4',
  },
  {
    id: 5,
    name: 'Product 1',
    category: 'Category 1',
    price: 10.99,
    quantity: 6,
    description: 'Dummy description for Product 1',
  },
  {
    id: 6,
    name: 'Product 6',
    category: 'Category 6',
    price: 60.99,
    quantity: 5,
    description: 'Dummy description for Product 6',
  },
  {
    id: 7,
    name: 'Product 7',
    category: 'Category 7',
    price: 70.99,
    quantity: 5,
    description: 'Dummy description for Product 7',
  },
  {
    id: 8,
    name: 'Product 8',
    category: 'Category 8',
    price: 80.99,
    quantity: 5,
    description: 'Dummy description for Product 8',
  },
  {
    id: 9,
    name: 'Product 9',
    category: 'Category 9',
    price: 90.99,
    quantity: 5,
    description: 'Dummy description for Product 9',
  },
  {
    id: 10,
    name: 'Product 10',
    category: 'Category 10',
    price: 10.99,
    quantity: 5,
    description: 'Dummy description for Product 10',
  },
];
const womenProducts = [
  {
    id: 1,
    name: 'women-product 1',
    category: 'Category 1',
    price: 10.99,
    quantity: 5,
    description: 'Dummy description for women-product 1',
  },
  {
    id: 2,
    name: 'women-product 2',
    category: 'Category 2',
    price: 19.99,
    quantity: 8,
    description: 'Dummy description for women-product 2',
  },
  {
    id: 3,
    name: 'women-product 3',
    category: 'Category 1',
    price: 15.99,
    quantity: 3,
    description: 'Dummy description for women-product 3',
  },
  {
    id: 4,
    name: 'women-product 4',
    category: 'Category 4',
    price: 20.99,
    quantity: 5,
    description: 'Dummy description for women-product 4',
  },
  {
    id: 5,
    name: 'women-product 1',
    category: 'Category 1',
    price: 10.99,
    quantity: 6,
    description: 'Dummy description for women-product 1',
  },
  {
    id: 6,
    name: 'women-product 6',
    category: 'Category 6',
    price: 60.99,
    quantity: 5,
    description: 'Dummy description for women-product 6',
  },
  {
    id: 7,
    name: 'women-product 7',
    category: 'Category 7',
    price: 70.99,
    quantity: 5,
    description: 'Dummy description for women-product 7',
  },
  {
    id: 8,
    name: 'women-product 8',
    category: 'Category 8',
    price: 80.99,
    quantity: 5,
    description: 'Dummy description for women-product 8',
  },
  {
    id: 9,
    name: 'women-product 9',
    category: 'Category 9',
    price: 90.99,
    quantity: 5,
    description: 'Dummy description for women-product 9',
  },
  {
    id: 10,
    name: 'women-product 10',
    category: 'Category 10',
    price: 10.99,
    quantity: 5,
    description: 'Dummy description for women-product 10',
  },
];
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
  } else if (req.url === '/men') {
    res.statusCode = 200;
    res.end(JSON.stringify(menProducts));
  } else if (req.url === '/women') {
    res.statusCode = 200;
    res.end(JSON.stringify(womenProducts));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Page not found' }));
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
