import React from 'react';

import Coworker from './coworker'

const Coworkers = ({ coworkers, currentUser, members}) => {
    return (
        <span id='coworkers'>
            {Object.values(coworkers).map(user => {
                if (currentUser._id !== user._id) {
                    return <Coworker key={user._id}
                                     user={user}
                                     member={R.find(R.propEq('userId', user._id))(members)}/>
                } else {
                    return '';
                }
            })}
        </span>
    )
};

export default Coworkers;