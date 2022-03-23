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
            <Link className="btn" to="/signin">Sign In</Link>
        </div>
    );

    return (
    <header className="nav-bar">
        <div>
            <Link to='/new'>Create an event</Link>
            {display}
        </div>
    </header>
    );
};