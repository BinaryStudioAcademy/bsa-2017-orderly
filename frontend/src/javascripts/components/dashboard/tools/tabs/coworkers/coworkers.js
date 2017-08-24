import React from 'react';
import UserProfile from '../../../../userProfile/userProfile';

const Coworkers = ({ coworkers}) => (
    <span id='coworkers'>
        {Object.values(coworkers).map(user => {
            return <UserProfile key={user._id} user={user}/>
        })}
    </span>
);

export default Coworkers;