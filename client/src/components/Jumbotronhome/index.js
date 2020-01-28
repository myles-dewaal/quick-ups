import React from 'react';
import Navbarhome from '../Navbarhome'
//import "./style.css";


const Jumbotronhome = () => {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid text-center" id='homejumbo'>
                    <Navbarhome />
                    <div id="jumbotext">
                    <h1 class="display-4">BIG pickups, quickly.</h1>
                    <p>Fridges, washers, dryers, dishwashers, etc. Peer to peer pick up and delivery service.</p>
                    </div>
            </div>
        </div>
    )
}
export default Jumbotronhome;