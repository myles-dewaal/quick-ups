import React from 'react';
import "./style.css";
​
const Jobs = (props) => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="/images/quick-ups.png" alt=""></img>
                    </a>
                    <ul className="nav navbar-nav flex-row float-left">
                        <li className="nav-item"><a className="nav-link pr-4 active" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link pr-4" href="saved">Inventory</a></li>
                        <li className="nav-item"><a className="nav-link pr-4" href="saved">Sign Out</a></li>
                    </ul>
                </div>
            </nav>
​
            <div class="jumbotron jumbotron-fluid text-center">
                <div class="container">
                    <h1 class="display-4">Claims Available</h1>
                    <p class="lead">Search through open jobs to make your next delivery.</p>
                </div>
            </div>
​
            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src="/images/couch.png" alt="Card image" />
                    <div class="card-body">
                        <h5 class="card-title">Pickup</h5>
                        <p class="card-text">These items are ready for customer pickup.</p>
                        <a type="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#pickUp">Button</a>
                    </div>
                    <div id="pickUp" class="modal" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>Modal body text goes here.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="/images/delivery.png" alt="Card image" />
                    <div class="card-body">
                        <h5 class="card-title">Delivery</h5>
                        <p class="card-text">Items to yet be delivered.</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="/images/items.png" alt="Card image" />
                    <div class="card-body">
                        <h5 class="card-title">Items</h5>
                        <p class="card-text">List of items that still need payment.</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>
​
​
        </div>
    );
};
export default Jobs;