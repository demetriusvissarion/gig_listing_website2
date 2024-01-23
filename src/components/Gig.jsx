import React from "react";
import './Gig.css';

const Gig = (props) => {
    return (    
        <div id="gig-container">
            <h3 id="band-name">{ props.band_name }</h3>
            <div>
                <img id="band-image" src={props.image} alt="Description of the image" />
            </div>
            <p id="band-description">{ props.band_description }</p>
            <p id="event-time">Event date: { props.event_time }</p>
            <p id="event-location">Location: { props.event_location }</p>
        </div>
    );
};

export default Gig;
