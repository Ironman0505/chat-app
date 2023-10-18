import React from 'react'
import UserDboard from './UserDboard';
import Verify from './Verify';



function NavPage() {

    var userLogged=true;

  return (
    <div>
        {
      userLogged ? <Verify /> : <UserDboard />
    }

    </div>
  )
}

export default NavPage