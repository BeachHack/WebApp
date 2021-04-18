const express = require('express')
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { addEvent, addAttendees, getEvents } = require('../database/models/queryFunctions.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('client/dist')));

app.get('/getEvents', getEvents);
app.post('/addEvent', addEvent);
app.post('/addAttendees', addAttendees);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})