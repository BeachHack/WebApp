import React, {useState, useEffect} from 'react';
import MyMapComponent from "./MyMapComponent.jsx";
import {API_KEY} from '../../config.js';
import MyEventModelComponent from "./MyEventModelComponent.jsx";
import axios from 'axios';

const App = ({ id }) => {

  var [userLocation, setUserLocation] = useState({latitude: 0, longitude: 0});
  var [accessLocation, setAccessLocation] = useState(false);
  var [createEvent, setCreateEvent] = useState(false);
  var [events, setEvents] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position){
      setUserLocation({latitude: position.coords.latitude, longitude: position.coords.longitude})
      setAccessLocation(true);
      axios.get('http://localhost:3000/getEvents')
        .then(({data}) => {
          setEvents(data);
        })
        .catch((err) => {
          console.log(err);
        })
    })
  }, []);

  return(
      <div style={{ height: '1000px', width:'1000px'}}>
        <h1>Pick Up</h1>
        <button onClick = {() => {
          setCreateEvent(true)
          }}
          type = "button">Create Event</button>
        {
          accessLocation?
          <MyMapComponent
            isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            userLocation={userLocation}
            events={events}
          />
          : null
        }
        {
          createEvent?
          <MyEventModelComponent />
          : null
        }
      </div>
  );
}
export default App;