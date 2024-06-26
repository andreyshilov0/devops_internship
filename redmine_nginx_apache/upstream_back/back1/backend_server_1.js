const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});


app.get('/backend', (req, res) => {
  res.send('Hello from Backend Server 1!');
});

app.get('/', (req, res) => {
  res.send('Hello from Backend Server 1!');
});

app.listen(8081, () => {
  console.log('Backend Server 1 listening on port 8081');
});