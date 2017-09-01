import React from 'react';
import UserProfile from '../../../../userProfile/userProfile';

const Coworkers = ({ coworkers, currentUser}) => {
    return (
        <span id='coworkers'>
            {Object.values(coworkers).map(user => {
                if (currentUser._id !== user._id) {
                    return <UserProfile key={user._id} user={user}/>
                } else {
                    return '';
                }
            })}
        </span>
    )
};

export default Coworkers;