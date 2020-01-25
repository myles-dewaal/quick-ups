import React from 'react';
import Navbarhome from '../Navbarhome'
import "./style.css";


const Jumbotronhome = () => {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid text-center">
                    <Navbarhome />
                    <h1 class="display-4">QuickUps</h1>
                    <p>Quickup's headline goes here</p>
            </div>
        </div>
    )
}
export default Jumbotronhome;