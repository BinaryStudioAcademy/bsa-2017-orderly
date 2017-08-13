import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import './tabItem.scss';

const TabItem = (base, currentTable, table, switchTableClick) => (
    <Link to={`/dashboard/${base._id}/${table._id}`} key={table._id}>
        <Button inverted
            active={table.isActive}
            onClick={() => {
                switchTableClick(table._id);} }>
            {table.name}
        </Button>
    </Link>
);

export default TabItem;