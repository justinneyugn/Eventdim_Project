import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.email}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link className="btn" to="/signup">Sign Up</Link>
            <br />
            <Link className="btn" to="/signin">Log In</Link>
        </div>
    );

    return (
    <header className="nav-bar">
        <div>
        {display}
        </div>
    </header>
    );
};