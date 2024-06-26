const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.get('/backend', (req, res) => {
  res.send('Hello from Backend Server 2!');
});

app.get('/', (req, res) => {
  res.send('Hello from Backend Server 2!');
});

app.listen(8082, () => {
  console.log('Backend Server 2 listening on port 8082');
});