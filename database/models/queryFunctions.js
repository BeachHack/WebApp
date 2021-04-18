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
    } catch (err) {
      console.log(err);
      res.sendStatus(404);
    }
  },

  addAttendees: async (req, res) => {
    try {
      await Event.find({_id: req.body._id}, { $push: { attendees: req.body.attendee } })
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(404);
    }
  },

  getEvents: async (req, res) => {
    try {
      const events = await Event.find({});
      res.status(200).send(events);
    } catch (err) {
      console.log(err);
      res.sendStatus(404);
    }
  }


}