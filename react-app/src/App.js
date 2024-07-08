import logo from './logo.svg';
import './App.css';
import Home from "./pages"
import PropertyList from "./pages/propertylist";
import Property from "./pages/property"
import NewCarousel from "./pages/newCarousel"
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

var data = require('./data.json');


function Titlebar() {
  return (
    <div className="Titlebar-grandparent-div">
      <div className="Titlebar-parent-div">
        <div className="Titlebar-child-div">
          <a href = "../"><h3 className="Titlebar-logo">LeasingCincy</h3></a>
          <a href = "../property-list" className="menu-item"><h3>Properties</h3></a>
          <a href = "../" className="menu-item"><h3>Main</h3></a>
        </div>
      </div>
    </div>
    );
}

function App() {

  let houseRoutes = []
  for (let i = 0; i < data["houses"].length; i++) {
    houseRoutes.push(<Route exact path={data["houses"][i]["route"]} element={<Property house={data["houses"][i]} />} />)
  }



  return (
    <div className="App">
      <Titlebar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/property-list" element={<PropertyList houses={data["houses"]} />} />
          {houseRoutes}
          {//<Route exact path="/carousel" element={<NewCarousel />} />
          }
        </Routes>
      </Router>
    </div>
  );
}




export default App;

