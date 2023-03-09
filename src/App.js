import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import AllHabitatsMap from 'components/AllHabitatsMap';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
        path="/"
        element={<AllHabitatsMap />}
        />
      </Routes>
    </div>
  );
}

export default App;
