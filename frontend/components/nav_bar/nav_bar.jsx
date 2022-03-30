import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const user = currentUser ? (
        <div>
            <div className='btn'>{currentUser.email}</div>
        </div>
    ) : (
        <div></div>
    );

    const display = currentUser ? (
        <div>
            <button className="btn create form-logout" onClick={logout}>Log Out</button>
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
                <li>{user}</li>
                <li><Link className="btn create" to='/new'>Create an event</Link></li>
                <li>{display}</li>
            </ul>
        </nav>
    </header>
    );
};