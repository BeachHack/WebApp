import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) => {

  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: props.userLocation.latitude, lng: props.userLocation.longitude}}
    >
      {/* {props.isMarkerShown && <Marker position={{  lat: props.userLocation.latitude, lng: props.userLocation.longitude}} />} */}
    </GoogleMap>
  )
}))



export default MyMapComponent;