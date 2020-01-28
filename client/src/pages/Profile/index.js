import React from 'react';
import NavbarProfile from '../../components/NavbarProfile';
import Searchjumbo from '../../components/Jumbotronhome';
import Jumbotronhome from '../../components/Jumbotronhome';
import CreateAcct from '../../components/CreateAcct';

const Profile = () => {
    return (
        <div>
            <NavbarProfile />
            <Jumbotronhome />
            <CreateAcct />
        </div>
    )
}
export default Profile;