import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import './tabItem.scss';

const TabItem = (table, switchTableClick) => (
    <Link to={`/dashboard/${table.id}`} key={table.id}>
        <Button inverted
            active={table.isActive}
            onClick={() => {
                switchTableClick(table.id);} }>
            {table.name}
        </Button>
    </Link>
);

export default TabItem;