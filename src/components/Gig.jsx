import React, { useState } from "react";
import './Gig.css';

const Gig = (props) => {
    const [isFavourite, setIsFavourite] = useState(false);

    const toggleFavourite = () => {
        setIsFavourite(!isFavourite);
    };

    const favoriteButtonClass = isFavourite ? 'favorite clicked' : 'favorite';

    return (    
        <div id="gig-container">
            <h3 id="band-name">{props.band_name}</h3>
            <div id="band-image-container">
                <img id="band-image" src={props.image} alt="Description of the image" />
                {/* Use the star shape as the favorite button */}
                <div className={`five-pointed-star ${isFavourite ? 'clicked' : ''}`} onClick={toggleFavourite}>
                </div>
            </div>
            <p id="band-description">{props.band_description}</p>
            <p id="event-time">Event date: {props.event_time}</p>
            <p id="event-location">Location: {props.event_location}</p>
        </div>
    );
};

export default Gig;
