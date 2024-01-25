import React, { useEffect, useState } from "react";

const Joke = () => {
    const [joke, setJoke] = useState({});

    useEffect(() => {
        const URL = 'https://official-joke-api.appspot.com/random_joke';
        fetch(URL)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setJoke(data);
                console.log("Raw Data:", data); // for dev stage only
            })
            .catch((error) => console.error("Error fetching todos:", error));
        console.log('i fire once');
    }, []);
    
    return (
        <>
        <h2>Random Joke:</h2>
        <div className="joke">
            <p> {joke.setup} </p>
            <p> {joke.punchline} </p>
        </div>
        </>
    );
    };

export default Joke;

// Task: Write a component called Joke that will do a fetch request to the Joke API below, and display it on the page.
// https://official-joke-api.appspot.com/random_joke
// {
//     "type": "general",
//     "setup": "Why did the melons plan a big wedding?",
//     "punchline": "Because they cantaloupe!",
//     "id": 336
// }