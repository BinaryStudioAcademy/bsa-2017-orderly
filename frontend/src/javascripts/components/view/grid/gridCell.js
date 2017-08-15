import React from 'react';
import './gridContent.scss';

export const GridCell = ({type, data}) => {
    return (
        <div className="body__item">
            <span>{data}</span>
        </div>
    );
};
