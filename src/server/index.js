require('babel-register');
const hook = require('css-modules-require-hook');
require('dotenv').config();

hook({ extensions: '.scss' });
const app = require('./server');

const PORT = process.env.NODE_PORT || 8081;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
