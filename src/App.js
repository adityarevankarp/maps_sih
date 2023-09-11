import SearchLocationInput from './components/GooglePlacesApi';
import MapComponent from './components/Map';
import './App.css';
import React,{ useState } from 'react';
import GetUserLocation from './components/GetUserLocation';

function App() {

  const [selectedLocation,setSelectedLocation] = useState({
    lat:28.7041,
    lng:77.1025,
  });

  const updateLocation = (lat, lng) => {
    setSelectedLocation({
      lat:lat, // Update latitude
      lng:lng, // Update longitude
    });
  };
  

  return (

    <div>
      <SearchLocationInput setSelectedLocation={setSelectedLocation}/>
      <MapComponent selectedLocation={selectedLocation}/>
      <GetUserLocation onLocationChange={updateLocation} />


    </div>
  );
}

export default App;
