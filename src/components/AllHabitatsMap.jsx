import React from 'react';
import mapboxgl from 'mapbox-gl';
import data from '../database/animals'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN;

function AllHabitatsMap() {
  const mapAllAnimals = new mapboxgl.Map({
    container: 'mapAll',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [-121.403732, 40.492392],
    zoom: 10
  });
  mapAllAnimals.on('load', () => {
    console.log('Loading Map...');
    });
  // Add polygons
  //map.addSource('data', data[0][1].habitats[0].polygon)
  return (
    <div className='container'>
      <div id='mapAll' />
    </div>
  )
};

export default AllHabitatsMap;
