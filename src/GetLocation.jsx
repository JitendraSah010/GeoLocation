import React, { useEffect } from 'react';
import useGeolocation from 'react-hook-geolocation';

function GetLocation() {
        // function getData(){
        //     // const geolocation = useGeolocation();
        //     // console.log(geolocation);

        // }

        const geolocation = useGeolocation();

        
  return (
    <div>
      <h1>Get Location</h1>
      <button >Get Location</button>
      <h1>Latitude is {geolocation.latitude}</h1> 
      <h1>Longitude is {geolocation.longitude}</h1> 
      {/* <h1>aDDRESS is {geolocation.longitude}</h1>  */}
    </div>
  )
}

export default GetLocation;