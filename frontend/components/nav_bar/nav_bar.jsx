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
        <Link to='/' className='website_name'>eventdim</Link>
        <nav>
            <ul className="nav_links">
                <li><Link className="btn create" to='/new'>Create an event</Link></li>
                <li>{display}</li>
            </ul>
        </nav>
    </header>
    );
};