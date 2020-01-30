import React from 'react';
import "./style.css";
import LogInForm from '../../components/LogInForm';
import Navbarhome from '../../components/Navbarhome';
import Footer from '../../components/Footer';
import CreateAcct from '../../components/CreateAcct';
import Jobs from '../../components/Jobs';


const Jobs = () => {
    return (
        <div id='jobs'>
          <Navbarhome />
          <Jobs />
          <Footer />  
        </div>

    )
}
export default Jobs;