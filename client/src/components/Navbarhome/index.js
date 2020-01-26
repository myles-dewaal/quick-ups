import React from 'react';
import "./style.css";

const Navbarhome = () => {
    return (
        <div>
            <nav className="navbar navbar-dark">
                <div className="container">
                <a className="navbar-brand" href="/"><img src="./images/truck.png"/></a>
                <ul className="nav navbar-nav flex-row float-left">
                    <li className="nav-item"><a className="nav-link pr-3 active" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link pr-3 active" href="saved">Create Account</a></li>
                    <li className="nav-item"><a className="nav-link pr-3 active" href="saved">Login</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbarhome;