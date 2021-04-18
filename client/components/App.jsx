import React, {useState, useEffect} from 'react';
import MyMapComponent from "./MyMapComponent.jsx";
import {API_KEY} from '../../config.js';
import MySearchBarComponent from './MySearchBarComponent.jsx';


const App = ({ id }) => {

  var [userLocation, setUserLocation] = useState({latitude: 0, longitude: 0});
  var [accessLocation, setAccessLocation] = useState(false);

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(function(position){
      setUserLocation({latitude: position.coords.latitude, longitude: position.coords.longitude})
      setAccessLocation(true);
    })

  }, []);

  return(
      <div style={{ height: '1000px', width:'1000px'}}>
        <h1>Pick Up</h1>
        <MySearchBarComponent
        />
        {
          accessLocation?
          <MyMapComponent
            isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            userLocation={userLocation}
          />
          : null
        }
      </div>
  );
}
export default App;