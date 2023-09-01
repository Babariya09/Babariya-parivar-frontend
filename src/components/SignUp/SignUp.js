import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        // Perform signup logic here
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
        } else {
            // Perform signup logic, e.g., make an API request
            // Simulating successful signup by setting isSignedUp to true
            setIsSignedUp(true);
        }
    };

    return (
        <>
            <div className="signup-page">
                <div className="signup-content">
                    <h2>Create an Account</h2>
                    {isSignedUp ? (
                        <div className="success-message">
                            Signup successful! Please <Link to="/login">login</Link> to
                            continue.
                        </div>
                    ) : (
                        <form onSubmit={handleSignup}>
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password:</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {errorMessage && (
                                <div className="error-message">{errorMessage}</div>
                            )}
                            <button type="submit" className="signup-btn">Sign Up</button>
                        </form>
                    )}
                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Signup;