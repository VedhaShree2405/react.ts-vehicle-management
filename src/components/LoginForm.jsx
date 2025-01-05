import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const LoginForm = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsSignUp(prev => !prev);
        setError(""); // Clear error on toggle
    };

    const onLoginSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            setError("Email and Password are required.");
            return;
        }
        if (isSignUp) {
            console.log("Sign Up:", { name, email, password });
            navigate("/home");
        } else {
            if (email === "test@test.com" && password === "123") {
                navigate("/home");
            } else {
                setError("Invalid email or password.");
            }
        }
    };

    return (
        <div className="app-body">
            <div className={`login-container ${isSignUp ? "active" : ""}`} id="container">
            <div className={`toggle-panel toggle-left ${isSignUp ? 'hidden' : ''}`}>
                    <div className="welcome-text">
                        Welcome!
                    </div>
                    <span>
                    Create an account to get started
                    </span>
                </div>
                <div className={`toggle-panel toggle-right ${isSignUp ? '' : 'hidden'}`}>
                    <div className="welcome-text">
                        Welcome!
                    </div>
                    <span>Log in to continue</span>
                </div>
                <div className="form-container sign-up">
                    <form onSubmit={onLoginSubmit}>
                        <h1>Create Account</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                            <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required={isSignUp}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {error && <p className="error">{error}</p>}
                        <button type="submit">Sign Up</button>
                        <p className="toggle-text" onClick={toggleForm}>Already have an account? Sign In</p>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form onSubmit={onLoginSubmit}>
                        <h1>Sign In</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                            <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                        <span>or use your email password</span>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <a href="#">Forget Your Password?</a>
                        {error && <p className="error">{error}</p>}
                        <button type="submit">Sign In</button>
                        <p className="toggle-text" onClick={toggleForm}>Don't have an account? Sign Up</p>
                    </form>
                </div>
            </div>
        </div>
    );
};