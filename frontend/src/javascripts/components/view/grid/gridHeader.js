import React from 'react';
import {Container, Icon} from 'semantic-ui-react';

export const ViewHeader = () => {
    return (
        <Container fluid>
            <Icon as="i" name="caret down"/>
            <div className="header__current-view">
                Current View
            </div>
        </Container>
    );
};