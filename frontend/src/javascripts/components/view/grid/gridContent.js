import React from 'react';
import './gridContent.scss';
import {Icon} from 'semantic-ui-react';
import {GridCell} from './gridCell';

export const GridContent = () => {
    return (
        <div className="grid__content">
            <div className="content__header">
                <div className="header__item item__row-selector">
                    <input type="checkbox"/>
                </div>
                <div className="header__item">
                    <Icon name="font" className="item__icon"/>
                    <span>Primary</span>
                </div>
                <div className="header__item">
                    <Icon name="font" className="item__icon"/>
                    <span>First</span>
                </div>
                <div className="header__item">
                    <Icon name="font" className="item__icon"/>
                    <span>Second</span>
                </div>
            </div>
            <div className="content__body">
                <div className="body__row">
                    <div className="body__item item__row-selector">
                        1
                    </div>
                    <GridCell type='text' data='Primary Field'/>
                    <GridCell type='text' data='One'/>
                    <GridCell type='text' data='Two'/>
                </div>
            </div>
        </div>
    );
};
