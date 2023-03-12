import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import data from "../database/animals";
import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN;

// Retrieve polygons from dataset
let habitatPolygons = [];
for (let animal of data) {
  for (let habitat of animal.habitats) {
    //console.log(habitat.polygon)
    habitatPolygons.push(habitat.polygon);
  }
}

function AllHabitatsMap() {
  useEffect(() => {
    function initializeMap() {
      const mapAllAnimals = new mapboxgl.Map({
        container: "mapAll",
        style: "mapbox://styles/mapbox/outdoors-v12",
        center: [-77.042793, -12.046374],
        zoom: 3,
      });
      mapAllAnimals.on("load", () => {
        mapAllAnimals.addSource("habitats", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [habitatPolygons],
            },
          },
        });
      });
      // Add a new layer to visualize the polygon.
      mapAllAnimals.addLayer({
        id: "habitats",
        type: "fill",
        source: "habitats",
        layout: {},
        paint: {
          "fill-color": "#0080ff", // blue color fill
          "fill-opacity": 0.5
        },
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
