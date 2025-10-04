import React, { useEffect, useState } from 'react';
import { getISSLocation } from '../services/nasaApi';

function ISSMap() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    const fetchLocation = async () => {
      const pos = await getISSLocation();
      setLocation(pos);
    };
    fetchLocation();
    const interval = setInterval(fetchLocation, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Localização Atual da ISS</h2>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
    </div>
  );
}

export default ISSMap;