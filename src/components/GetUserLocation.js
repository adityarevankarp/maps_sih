// import React,{useEffect, useState} from 'react'

// export default function GetUserLocation() {
//     const [latitude,setLatitude] = useState('');
//     const [longitude,setLongitude] = useState('');
//     useEffect(()=>{
//         navigator.geolocation.getCurrentPosition((position)=>{
//             setLatitude(position.coords.latitude);
//             setLongitude(position.coords.longitude);

//         })
//     },[latitude, longitude])
//   return (
//     <div>
      
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react';

export default function GetUserLocation({ onLocationChange }) {

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        onLocationChange(latitude, longitude);
      
    });
  }, [onLocationChange]);

  return (
    <div>
      
    </div>
  );
}


