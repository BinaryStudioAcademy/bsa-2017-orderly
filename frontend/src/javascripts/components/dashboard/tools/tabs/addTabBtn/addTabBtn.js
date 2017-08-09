import React from 'react';
import { Popup, Icon, Input } from 'semantic-ui-react';

import './addTabBtn.scss';

let input;

const AddTabBtn = ({addTableClick}) => (
    <Popup trigger={<Icon inverted link name='plus square' size='large'/>}
        on='click'
        hideOnScroll>
        <Input icon={{ name: 'plus', link: true, onClick: () => {
            if (!input || !input.value) return;
            addTableClick({ name: input.value});
            input = '';
        }}}
        onChange={(event) => { input = event.target;}}
        type='text'
        placeholder='Add table...' />
    </Popup>
);

export default AddTabBtn;