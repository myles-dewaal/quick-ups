import React from 'react';
import LogInForm from '../../components/LogInForm';
import Navbarhome from '../../components/Navbarhome';
import Footer from '../../components/Footer';
import CreateAcct from '../../components/CreateAcct';


const NewAcct = () => {
    return (
        <div>
          <Navbarhome />
          <CreateAcct />
          <Footer />  
        </div>

    )
}
export default NewAcct;