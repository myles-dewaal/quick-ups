import React from 'react';

const Navbarhome = () => {
    return (
        <div>
            <nav className="navbar navbar-dark" id='navbarhomescreen'>
                <div className="container">
                <a className="navbar-brand" href="/"><img src="./images/truck.png" alt="logo" id="navbarlogo"/></a>
                <ul className="nav navbar-nav flex-row float-left">
                    <li className="nav-item navbutton"><a className="nav-link pr-3 active" href="/">Home</a></li>
                    <li className="nav-item navbutton"><a className="nav-link pr-3 active" href="/create">Create Account</a></li>
                    <li className="nav-item navbutton"><a className="nav-link pr-3 active" href="/login">Login</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbarhome;