import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import data from "../database/animals";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN;

// Retrieve polygons from dataset
let habitatPolygons = [];
for (let animal of data) {
  console.log(animal.habitats)
  for (let habitat of animal.habitats) {
    console.log(habitat.polygon)
    habitatPolygons.push(habitat.polygon)
  }
}
console.log(habitatPolygons)

function AllHabitatsMap() {
  useEffect(() => {
    function initializeMap() {
      const mapAllAnimals = new mapboxgl.Map({
        container: "mapAll",
        style: "mapbox://styles/mapbox/outdoors-v12",
        center: [-121.403732, 40.492392],
        zoom: 10,
      })
      mapAllAnimals.on("load", () => {
        mapAllAnimals.addSource('polygon', {
          
        })
        
      });
    }
    initializeMap();
  }, []);

  
  // Add polygons
  //map.addSource('data', data[0][1].habitats[0].polygon)
  return (
    <div className="container">
      <div id="mapAll" />
    </div>
  );
}

export default AllHabitatsMap;
