import React, { useState } from "react";
import './LoginForm.css'

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "username") {
            setUsername(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === 'phoneNumber') {
            // Remove non-numeric characters from the phone number
            const numericValue = value.replace(/\D/g, '');
            setPhoneNumber(numericValue);
        }
    };

    // http://url.com/endpoint did not work
    // created a working endpoint using a Flask server
    // (extended Projects/cloud_deployment/simple_server)
    // tested with Postman
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:5000/endpoint", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username }),
            });

            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }

            console.log("Request successful!");
        } catch (error) {
            console.error("Error handling the request:", error.message);
        }
        };
        

    return (
        <>
            <h2>Login Form</h2>
            <form className="form-container" onSubmit={handleSubmit}>
                <label className="label">
                    Enter your username:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        className="input-field"
                    />
                </label>
                <label className="label">
                    Enter your password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className="input-field"
                    />
                </label>
                <label className="label">
                    Enter your phone number:
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handleChange}
                        className="input-field"
                    />
                </label>
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </>
    );
};

export default LoginForm;