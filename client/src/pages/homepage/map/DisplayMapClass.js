// src/DisplayMapFC.js

import * as React from 'react';

export const DisplayMapFC = ( props ) => {
  // Create a reference to the HTML element we want to put the map on
  const mapRef = React.useRef(null);

  // Loading coordinates from props:
  const coords = {lat: props.coordinates.lat, lng: props.coordinates.long}

  /**
   * Create the map instance
   * While `useEffect` could also be used here, `useLayoutEffect` will render
   * the map sooner
   */
  React.useLayoutEffect(() => {
    // `mapRef.current` will be `undefined` when this hook first runs; edge case that
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
        apikey: process.env.REACT_APP_HERE_API_KEY
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: coords,
      zoom: 15,
      pixelRatio: window.devicePixelRatio || 1
    });

    // add a resize listener to make sure that the map occupies the whole container
    window.addEventListener('resize', () => hMap.getViewPort().resize());

    // Define a variable holding SVG mark-up that defines an icon image:
    const svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">H</text></svg>';

    // Create an icon and a marker:
    const icon = new H.map.Icon("/Google_Maps_pin.svg"),
    marker = new H.map.Marker(coords, {icon: icon});

    // Add the marker to the map:
    hMap.addObject(marker);

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

    const ui = H.ui.UI.createDefault(hMap, defaultLayers);

    // This will act as a cleanup to run once this hook runs again.
    // This includes when the component un-mounts
    return () => {
      hMap.dispose();
    };
  }, [mapRef]); // This will run this hook every time this ref is updated

  return <div className="map" ref={mapRef} style={{ height: "calc(100vh - (30vh + 56px))" }} />;
};