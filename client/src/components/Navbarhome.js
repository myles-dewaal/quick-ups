import React from 'react';

const Navbarhome = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                <a className="navbar-brand" href="/">QuickUps</a>
                <ul className="nav navbar-nav flex-row float-left">
                    <li className="nav-item"><a className="nav-link pr-4 active" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link pr-4" href="saved">Create Account</a></li>
                    <li className="nav-item"><a className="nav-link pr-4" href="saved">Login</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbarhome;