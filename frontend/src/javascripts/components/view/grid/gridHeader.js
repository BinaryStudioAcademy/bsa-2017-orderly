import React from 'react';
import {Container, Icon} from 'semantic-ui-react';

export const GridHeader = () => {
    return (
        <Container fluid>
            <div className="header__view-selector">
            <Icon name="caret down"/>
            </div>
            <div className="header__current-view">
                Current View
            </div>
        </Container>
    );
};