import React from 'react';
import Footer from '../../components/Footer';
import Jobs from '../../components/Jobs';
import Navbar from "../../components/NavBar";


const Availablejobs = () => {
    return (
        <div id='jobs'>
          <div className="emptydiv"></div>
          <div className='horizontalline'></div>
          <Navbar />
          <Jobs />
          <Footer />  
        </div>

    )
}
export default Availablejobs;