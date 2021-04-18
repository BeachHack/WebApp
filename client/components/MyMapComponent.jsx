import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) => {

  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: props.userLocation.latitude, lng: props.userLocation.longitude}}
    >
      <Marker position={{ lat: -44.397, lng: 150.644 }} />
      {
        props.events.map((event) => {
          return (<Marker position={{ lat: event.location.longitude, lng: event.location.latitude }} />)
        })
      }
    </GoogleMap>
  )
}))



export default MyMapComponent;