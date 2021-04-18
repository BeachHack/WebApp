import React, {useState, useEffect} from 'react';
import MySearchBarComponent from './MySearchBarComponent.jsx';
import axios from 'axios';

const MyEventModelComponent = (props) => {
  var [title, setTitle] = useState('');
  var [sport, setSport] = useState('Basketball');
  var [location, setLocation] = useState('');
  var [time, setTime] = useState('');
  var [description, setDescription] = useState('')

  const handleTitle = (event) => {
    setTitle(event.target.value);
  }
  const handleSport = (event) => {
    setSport(event.target.value);
  }
  const handleLocation = (event) => {
    setLocation(event.target.value);
  }
  const handleTime= (event) => {
    setTime(event.target.value);
  }
  const handleDescription = (event) => {
    setDescription(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title);
    console.log(sport);
    console.log(location);
    console.log(time);
    console.log(description);
    axios.post('http://localhost:3000/addEvent', {
      title: title,
      date: time,
      location: location,
      sport: sport,
      description: description,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return(
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label for="title">Title:</label>
          <input type="text" value={title} onChange={handleTitle} ></input>
          <label for="sport">Sport</label>
          <select name="sport" value={sport} onChange={handleSport}>
              <option>Basketball</option>
              <option>Football</option>
              <option>Soccer</option>
              <option>Tennis</option>
              <option>Baseball</option>
              <option>Softball</option>
          </select>
          <label>Location</label>
          <MySearchBarComponent
            setLocation={setLocation}
          />
          <label>Time</label>
          <input type="datetime-local" id="meeting-time"
            name="meeting-time" value="2018-06-12T19:30"
            value={time}
            onChange={handleTime}/>
          <label>Description</label>
          <textarea value={description} onChange={handleDescription}>
              Description
          </textarea>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default MyEventModelComponent;
