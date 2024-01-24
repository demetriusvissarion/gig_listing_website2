import React from "react";

const ClickListener = () => {
    const handleClick = (event) => {
        console.log(event);
    };

    return (
        <>
            <button onClick={handleClick}>Click Me!</button>
        </>
    );
};

export default ClickListener;