import React from 'react';
import "./style.css";
import Jumbotronhome from '../../components/Jumbotronhome';
import Gettingstarted from '../../components/Gettingstarted';

const Search = () => {
    return (
        <div id='home'>
            <Jumbotronhome />
            <Gettingstarted />
        </div>
    )
}
export default Search;