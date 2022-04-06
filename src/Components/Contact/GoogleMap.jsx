import React, { Component } from 'react';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const position = {
  lat: 22.429771600000002,
  lng: 91.74165231436032
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

class MyComponents extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyCCEjqj49ubqGYjGwPP3nluuehDPYmvalM"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={position}
          zoom={10}
        >
          <Marker
            onLoad={onLoad}
            position={position}
          />
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default React.memo(MyComponents)