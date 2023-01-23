import React from "react";

/* COMPONENTS */
import Batterie from "../components/Batterie";
import CPU from "../components/CPU";
import Graphics from "../components/Graphics";
import Memory from "../components/Memory";
import Monitoring from "../pages/Monitoring";
import Navigation from "../components/Navigation";
import SoftVersions from "../pages/SoftVersions";

/* SCSS */
import "../css/styles.scss";

import { Route, Routes } from "react-router-dom";
import Network from "../pages/Network";
import Wifi from "../pages/Wifi";
import Home from "../pages/Home";
import Params from "../pages/Params";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <p className="title-name">Accueil</p>
              <hr className="line-separation" />
              <Home />
              <Navigation />
            </>
          }
        />
        <Route
          path="/IS"
          element={
            <>
              <Navigation />
              <p className="title-name">Information système</p>
              <hr className="line-separation" />
              <div className="top-info">
                <CPU />
                <Memory />
                <Batterie />
              </div>
            </>
          }
        />
        <Route
          path="/monitoring"
          element={
            <>
              <p className="title-name">Monitor</p>
              <hr className="line-separation" />
              <Navigation />
              <Monitoring />
            </>
          }
        />
        <Route
          path="/soft-versions"
          element={
            <>
              <p className="title-name">Versions</p>
              <hr className="line-separation" />
              <Navigation />
              <SoftVersions />
            </>
          }
        />
        <Route
          path="/network"
          element={
            <>
              <p className="title-name">Network</p>
              <hr className="line-separation" />
              <Navigation />
              <Network />
            </>
          }
        />
        <Route
          path="/wifi"
          element={
            <>
              <p className="title-name">Wifi</p>
              <hr className="line-separation" />
              <Navigation />
              <Wifi />
            </>
          }
        />
        <Route
          path="/params"
          element={
            <>
              <p className="title-name">Paramètres</p>
              <hr className="line-separation" />
              <Navigation />
              <Params />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
