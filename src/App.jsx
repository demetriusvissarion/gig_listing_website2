// import Hello from "./components/Hello";
// import makersLogo from "../public/assets/Makers-Logo.png";
import "./App.css";
import React, { useState } from "react";
import Gig from "./components/Gig";
import ClickListener from "./components/ClickListener";
import InputComponent from "./components/InputComponent";
import Die from "./components/Die";
import LoginForm from "./components/forms/LoginForm";

function App() {
  const [gigs, setGigs] = useState([
    {
      band_name: 'Queen',
      band_description: "Makers' favourite rock band",
      event_time: '26/01/2024 @20:00',
      event_location: 'O2 Arena',
      image: '/assets/queen.jpg',
      isFavourite: false,
    },
    {
      band_name: 'Akon',
      band_description: 'Singer and rapper',
      event_time: '27/01/2024 @20:00',
      event_location: 'O2 Arena',
      image: '/assets/akon.jpg',
      isFavourite: false,
    },
  ]);

  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const toggleFavourite = (band_name) => {
    setGigs((prevGigs) => {
      const updatedGigs = prevGigs.map((gig) => 
        gig.band_name === band_name ? { ...gig, isFavourite: !gig.isFavourite } : gig
      );
      return updatedGigs;
    });
  };

  const favoritedGigs = gigs.filter((gig) => gig.isFavourite);
  const otherGigs = gigs.filter((gig) => !gig.isFavourite);


  return (
    <>
        <h1>Favorited Gigs</h1>
        {favoritedGigs.map((gig) => (
          <Gig
            key={gig.band_name}
            {...gig}
            isFavourite={gig.isFavourite}
            toggleFavourite={() => toggleFavourite(gig.band_name)}
          />
        ))}
        <h1>Other Gigs</h1>
        {otherGigs.map((gig) => (
          <Gig
            key={gig.band_name}
            {...gig}
            isFavourite={gig.isFavourite}
            toggleFavourite={() => toggleFavourite(gig.band_name)}
          />
        ))}
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
      <br></br>
      <br></br>
      <LoginForm />
    </>
  );
}

export default App;