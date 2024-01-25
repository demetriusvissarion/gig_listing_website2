import "./App.css";
import React, { useEffect, useState } from "react";
import Gig from "./components/Gig";
import ClickListener from "./components/ClickListener";
import InputComponent from "./components/InputComponent";
import Die from "./components/Die";
import LoginForm from "./components/forms/LoginForm";
import TodoList from "./components/TodoList";
import Joke from "./components/Joke";

function App() {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    const URL = `https://makers-gig-backend.onrender.com/events`;
    fetch(URL)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            // console.log("Raw Data:", data); // Log raw data
            setGigs(data);
        })
        .catch((error) => console.error("Error fetching todos:", error));
}, []);

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

  const [todos, setTodos] = useState([]);


  return (
    <>
      <Joke />
      <br></br>
      <br></br>
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
      <br></br>
      <br></br>
      <TodoList todos={todos} setTodos={setTodos} todo_title='Walk the dog'/>
      <br></br>
      <br></br>
    </>
  );
}

export default App;

// We have built a basic backend API which will send a list of events.

// The API is hosted on render here: https://makers-gig-backend.onrender.com/events

// Use a tool like Postman or CURL to send requests and explore this API.
// Update your gig application to fetch the list of events from this backend the first time the application is loaded, instead of hard coding them.
// While the events are loading, your application should somehow communicate to the user that the data is loading, either through a spinner, or the word "Loading" etc. It is up to you how to display it.
// Note: This app is being hosted using the free version of Render, so may take up to 30 seconds to respond if it hasn't been used for a while.


// {
//   band_name: 'Queen',
//   band_description: "Makers' favourite rock band",
//   event_time: '26/01/2024 @20:00',
//   event_location: 'O2 Arena',
//   image: '/assets/queen.jpg',
//   isFavourite: false,
// },
// {
//   band_name: 'Akon',
//   band_description: 'Singer and rapper',
//   event_time: '27/01/2024 @20:00',
//   event_location: 'O2 Arena',
//   image: '/assets/akon.jpg',
//   isFavourite: false,
// },
