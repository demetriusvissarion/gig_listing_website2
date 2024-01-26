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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const URL = `https://makers-gig-backend.onrender.com/events`;
    // simulate a delay during development
    const delay = 0;
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        // console.log("Raw Data:", data);
        setGigs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching todos:", error);
        setLoading(false);
      }
    };
    const timeoutId = setTimeout(fetchData, delay);
    return () => clearTimeout(timeoutId);
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
      {loading ? (
        <div className="loading-container">
          <div className="loading-animation"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <br />
          <br />
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
          <br />
          <br />
          <div>
            <h1>Click Listener</h1>
            <ClickListener />
          </div>
          <br />
          <br />
          <h2>Input Logger App</h2>
          <InputComponent />
          <br />
          <br />
          <Die />
          <br />
          <br />
          <LoginForm />
          <br />
          <br />
          <TodoList todos={todos} setTodos={setTodos} todo_title='Walk the dog' />
          <br />
          <br />
          <Joke />
        </>
      )}
    </>
  );
}

export default App;
