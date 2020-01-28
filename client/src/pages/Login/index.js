import React from 'react';
import LogInForm from '../../components/LogInForm';
import Navbarhome from '../../components/Navbarhome';
import Footer from '../../components/Footer';
import NavbarProfile from '../../components/NavbarProfile';


const Login = () => {
    return (
        <div>
          <Navbarhome />
          <LogInForm />
          <Footer />  
        </div>

    )
}
export default Login;