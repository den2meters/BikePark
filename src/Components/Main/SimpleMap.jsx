import React from 'react';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './../../Styles/Main/SimpleMap.scss'


export default function Home() {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: 'AIzaSyClbIbQOqVdyCVMW5I1WlsY_EeZWJnxkEg' });
  if (!isLoaded) return <div>Loading...</div>
  return <div><SimpleMap /></div>
} 

function SimpleMap() {
   return (
     <div style={{ height: '400px' }} >
        <GoogleMap zoom={10} center={{ lat: 50.39673471952995, lng: 30.623086633452253 }} mapContainerClassName='container'>
         <Marker position={{ lat: 50.39673471952995, lng: 30.623086633452253 }} /> 
        </GoogleMap>
      </div>
   );
}
//export default SimpleMap;