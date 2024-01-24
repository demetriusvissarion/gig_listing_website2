import React from "react";

const InputComponent = () => {
    const handleInputChange = (event) => {
        const typedText = event.target.value;
        console.log("Typed text:", typedText);
    };

    return (
    <input
        type="text"
        placeholder="Type something..."
        onChange={handleInputChange}
    />
    );
};

export default InputComponent;
