import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
        path="/"
        element={
          <div className="home-container">
            <Home />
          </div>
        }
        />
      </Routes>
    </div>
  );
}

export default App;
