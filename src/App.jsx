// import Hello from "./components/Hello";
// import makersLogo from "../public/assets/Makers-Logo.png";
import "./App.css";
import React from "react";
import Gig from "./components/Gig";

function App() {
  const band_name = 'Queen';
  const band_description = "Makers' favourite rock band";
  const event_time = '26/01/2024 @20:00';
  const event_location = 'O2 Arena';

  return (
    <>
    <div>
      < Gig 
        band_name={band_name}
        band_description={band_description}
        event_time={event_time}
        event_location={event_location}
      />
    </div>
    </>
  );
}

export default App;