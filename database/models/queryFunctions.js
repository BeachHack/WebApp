const { Event } = require('./schema.js');

module.exports = {
  addEvent: async (req, res) => {
    try {
      await Event.create({
        title: req.body.title,
        date: req.body.date,
        location: req.body.location,
        sport: req.body.sport,
        description: req.body.description,
      })
      res.sendStatus(200);
    } catch (error) {
      console.log(err);
      res.sendStatus(404);
    }
  }
}