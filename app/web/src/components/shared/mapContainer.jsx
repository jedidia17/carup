import React, { useEffect, useState } from 'react';

const MapContainer = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loadScript = (url) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.defer = true;
      script.onload = () => initMap();
      document.head.appendChild(script);
    };

    const initMap = () => {
      const mapOptions = {
        center: { lat: 48.8566, lng: 2.3522 },
        zoom: 13,
      };
      const map = new google.maps.Map(document.getElementById('map'), mapOptions);
      new google.maps.Marker({ position: { lat: 48.8566, lng: 2.3522 }, map });
      setMap(map);
    };

    loadScript(`https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`);
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default MapContainer;
