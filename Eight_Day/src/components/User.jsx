import React, { useEffect } from 'react';
import { useState } from 'react';

const User = ({name}) => {
  const [userData,setUserData] = useState({});
  return (
    <div className='user-card'>
        <h1>FOREVER LEARNER</h1>
        <h2>{name}</h2>
        <h3>KGF</h3>
        <h4>Contact:Adil2584</h4>
    </div>
  )
}

export default User;