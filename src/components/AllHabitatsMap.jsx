import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import data from "../database/animals";
import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN;

// Retrieve polygons from dataset
let habitatPolygons = [];
for (let animal of (data)) {
  for (let habitat of animal.habitats) {
    //console.log(habitat.polygon)
    habitatPolygons.push(habitat.polygon)
  }
}

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
        mapAllAnimals.addSource('habitats', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': habitatPolygons
            }
          }
        })
      });
    }
    initializeMap();
  }, []);

  return (
    <div className="container">
      <div id="mapAll" />
    </div>
  );

}

export default AllHabitatsMap;
