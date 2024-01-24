// import Hello from "./components/Hello";
// import makersLogo from "../public/assets/Makers-Logo.png";
import "./App.css";
import React, { useState } from "react";
import Gig from "./components/Gig";
import ClickListener from "./components/ClickListener";
import InputComponent from "./components/InputComponent";
import Die from "./components/Die";

function App() {
  const gigs = [
    {
      band_name:'Queen', 
      band_description:"Makers' favourite rock band",
      event_time:'26/01/2024 @20:00',
      event_location:'O2 Arena',
      image:'/assets/queen.jpg'
    },
    {
      band_name:'Akon', 
      band_description:"Singer and rapper",
      event_time:'27/01/2024 @20:00',
      event_location:'O2 Arena',
      image:'/assets/akon.jpg'
    }
  ]

  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };

  const [isFavourite, setIsFavourite] = useState(false);
  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <>
    <div>
      {gigs.map((gig) => {
        return (
          <Gig 
            band_name={gig.band_name}
            band_description={gig.band_description}
            event_time={gig.event_time}
            event_location={gig.event_location}
            image={gig.image}
            setIsFavourite={setIsFavourite}
            isFavourite={isFavourite}
            toggleFavourite={toggleFavourite}
            />
        )
      })}
      <div>
        <h1>Counter</h1>
        <button onClick={incrementCounter}>Increment the counter</button>
      </div>
      <br></br>
      <br></br>
      <div>
      <h1>Click Listener</h1>
      <ClickListener />
      </div>
      <br></br>
      <br></br>
      <h2>Input Logger App</h2>
      <InputComponent />
      <br></br>
      <br></br>
      <Die />
    </div>
    </>
  );
}

export default App;
