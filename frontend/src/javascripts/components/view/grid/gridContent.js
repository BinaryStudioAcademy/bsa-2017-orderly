import React from 'react';
import {Container} from 'semantic-ui-react';
import './grid.scss';

export const GridContent = () => {
    return (
        <Container fluid>
            <table id="content__grid">
                <thead>
                <tr>
                    <th id="grid__row">
                        <input type="checkbox"/>
                    </th>
                    <th>Name</th>
                    <th>Field</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>First</td>
                    <td>Custom data</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Second</td>
                    <td>Custom data</td>
                </tr>
                </tbody>
            </table>
        </Container>
    );
};