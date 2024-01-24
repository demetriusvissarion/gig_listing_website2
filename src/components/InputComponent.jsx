import React, { useState } from "react";

const InputComponent = () => {
    const [typedText, setTypedText] = useState("");

    const handleInputChange = (event) => {
        const newText = event.target.value;
        setTypedText(newText);
    };

    return (
    <div>
        <input
        type="text"
        placeholder="Type something..."
        onChange={handleInputChange}
        />
        <p>{typedText}</p>
    </div>
    );
};

export default InputComponent;
