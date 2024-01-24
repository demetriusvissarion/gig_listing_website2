import React, { useState } from "react";

const Die = () => {
    const [rollResult, setRollResult] = useState(0);

    const rollDie = () => {
        const newRollResult = Math.floor(Math.random() * 6) + 1;
        setRollResult(newRollResult);
    };

    return (
    <div>
        <h2>Die Roller</h2>
        <button onClick={rollDie}>Roll Die</button>
        {rollResult !== null && (
        <p>
            The die rolled: <strong>{rollResult}</strong>
        </p>
        )}
    </div>
    );
};

export default Die;
