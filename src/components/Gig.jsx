import React from "react";
import './Gig.css';

const Gig = (props) => {
    const image = '/assets/queen.jpg'
    function formatEventTime(timestamp) {
        const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
        const formattedDate = new Date(timestamp).toLocaleDateString('en-GB', options);
        return formattedDate;
    }
    
    return (    
        <div id="gig-container">
            <h3 id="band-name">{props.band_name}</h3>
            <div id="band-image-container">
                <img id="band-image" src={image} alt="Description of the image" />
                <div className={`five-pointed-star ${props.isFavourite ? 'clicked' : ''}`} onClick={props.toggleFavourite}>
                </div>
            </div>
            <p id="band-description">{props.description}</p>
            <p id="event-time">Event date: {formatEventTime(props.time)}</p>
            <p id="event-location">Location: {props.location}</p>
        </div>
    );
};

export default Gig;