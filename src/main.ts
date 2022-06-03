import express from 'express';
const app = express();

app.get('/', function (req, res) {
  res.send('ts-node-14-express template');
});

app.listen(3000);
