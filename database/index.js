const mongoose = require('mongoose');
const { DB_IP } = require('../config.js');

mongoose.connect(
  `mongodb+srv://${DB_IP}/beachhacks`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: {
      authSource: 'admin'
    }
  })
  .then(() => console.log('Mongoose connected'))
  .catch(() => console.log('connection fails'));

module.exports = mongoose