import SearchLocationInput from './components/GooglePlacesApi';
import MapComponent from './components/Map';
import './App.css';
import { useState } from 'react';

function App() {

  const [selectedLocation,setSelectedLocation] = useState({
    lat:28.7041,
    lng:77.1025,
  });
  return (

    <div>
      <SearchLocationInput/>
      <MapComponent selectedLocation={selectedLocation}/>
    </div>
  );
}

export default App;
