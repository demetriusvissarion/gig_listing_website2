import React, { useState } from "react";
import './LoginForm.css'

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [passwordError, setPasswordError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
            // console.log('Password length:', value.length);
            if (value.length < 8) {
                // console.log('Setting password error');
                setPasswordError("Password must be at least 8 characters");
            } else {
                // console.log('Clearing password error'); 
                setPasswordError('');
            }
        } else if (name === 'phoneNumber') {
            const numericValue = value.replace(/\D/g, '');
            setPhoneNumber(numericValue);
        }
    };
    

    // http://url.com/endpoint did not work
    // created a working endpoint using a Flask server
    // (extended Projects/cloud_deployment/simple_server)
    // tested with Postman
    const handleSubmit = (event) => {
        event.preventDefault();

        // Check password length again before submitting
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
            return;
        }

        setTimeout(async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/endpoint", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, password, phoneNumber }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                console.log("Request successful!");
            } catch (error) {
                console.error("Error handling the request:", error.message);
            }
        }, 1000);
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
                {passwordError && <p className="error-message">{passwordError}</p>}
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