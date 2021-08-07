import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useState } from 'react';
import { getCenter } from 'geolib';

function Map({ searchResults }) {
  // Transform the searchResults object into the {longitude:xxx, latitude:xxxx} object
  const coordinates = searchResults.map((result) => ({ longitude: result.long, latitude: result.lat }));

  //The center of latitude and longitude of the results, the area of the results.
  const center = getCenter(coordinates);

  const [selectedLocation, setSelectedLocation] = useState({});

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/astharia09/cks1q7n1450c718p6jyop155e"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          {selectedLocation.long === result.long ? (
            <Popup className="text-white text-sm font-semibold z-10 bg-transparent" onClose={() => setSelectedLocation({})} closeOnClick={true} latitude={result.lat} longitude={result.long}>
              {result.title}
            </Popup>
          ) : (
            false
          )}
          <Marker longitude={result.long} latitude={result.lat} offsetLeft={-10} offsetTop={-10}>
            <p onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl animate-bounce" aria-label="push pin">
              📍
            </p>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
