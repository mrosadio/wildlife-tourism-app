import React from 'react';
import mapboxgl from 'mapbox-gl';
import data from '../database/animals'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN;

function AllHabitatsMap() {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [-121.403732, 40.492392],
    zoom: 10
  });
  
  // Add polygons
  //map.addSource('data', data[0][1].habitats[0].polygon)
  return (
    <div className='container'>
      <div id='map' />
    </div>
  )
};

export default AllHabitatsMap;
