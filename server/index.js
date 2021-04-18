const express = require('express')
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('client/dist')));
// app.get('/', (req, res) => {
//   app.use(express.static(path.resolve('client/dist')));
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})