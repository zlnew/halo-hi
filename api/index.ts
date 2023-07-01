const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/test', function (_req: any, res: any) {
  res.send('Test successful');
});

export default {
  path: '/api',
  handler: app
};