import React from "react";

import { GoogleMap,useLoadScript,MarkerF } from "@react-google-maps/api";
import {REACT_APP_GOOGLE_MAPS_KEY} from '../constants/constants.js'
const MapComponent = ({selectedLocation}) =>{
    const {isLoaded,loadError} = useLoadScript({
        googleMapsApiKey:REACT_APP_GOOGLE_MAPS_KEY
    });
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
      }, []);
      if (loadError) return "Error";
      if (!isLoaded) return "Maps";
    
    return(
        <div style={{ marginTop: "50px" }}>
        <GoogleMap
          mapContainerStyle={{
            height: "800px",
          }}
          center={selectedLocation}
          zoom={13}
          onLoad={onMapLoad}
        >
          
        </GoogleMap>
      </div>
    )

};
export default MapComponent;