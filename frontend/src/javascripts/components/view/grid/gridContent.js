import React from 'react';
import './gridContent.scss';

export const GridContent = () => {
    return (
        <div className="grid__content">
            <div className="content__header">
                <div className="header__item item__row-selector">
                    <input type="checkbox"/>
                </div>
                <div className="header__item">
                    <span>Primary</span>
                </div>
                <div className="header__item">
                    <span>First</span>
                </div>
                <div className="header__item">
                    <span>Second</span>
                </div>
            </div>
            <div className="content__body">
                <div className="body__row">
                    <div className="body__item item__row-selector">
                        1
                    </div>
                    <div className="body__item">
                        <span>Primary name</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

/*
            <table id="content__grid">
                <thead>
                <tr>
                    <th id="grid__row">
                        <input type="checkbox"/>
                    </th>
                    <th>Name</th>
                    <th>Field</th>
                    <th>Another Field</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>First</td>
                    <td>Custom data</td>
                    <td>Custom data</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Second</td>
                    <td>Custom data</td>
                    <td>Custom data</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Third</td>
                    <td>Custom data</td>
                    <td>Custom data</td>
                </tr>
                </tbody>
            </table>
 */