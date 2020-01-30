import React from 'react';
import "./style.css";
import Jumbotronhome from '../../components/Jumbotronhome';
import Gettingstarted from '../../components/Gettingstarted';
import Truckhome from '../../components/Truckhome';
import Reviews from '../../components/Reviews';
import Footer from '../../components/Footer';
import ClipLoader from "react-spinners/ClipLoader";


const Home = () => {
    return (
        <div id='home'>
            <Jumbotronhome />
            <Gettingstarted />
            <Truckhome />
            <Reviews />
            <Footer />
        </div>
    )
}
export default Home;