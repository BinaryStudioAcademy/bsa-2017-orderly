import React from 'react';
import { Popup, Icon, Input } from 'semantic-ui-react';

import './addTabBtn.scss';

let input;

const AddTabBtn = ({router, addTableClick}) => (
    <Popup trigger={<Icon inverted link name='plus square' size='large'/>}
        on='click'
        hideOnScroll>
        {console.log(router)}
        <Input icon={{ name: 'plus', link: true, onClick: () => {
            if (!input || !input.value) return;
            const id = Date.now();
            addTableClick({ name: input.value, id: id});
            // router.push(`/dashboard/${id}`);
            input = '';
        }}}
        onChange={(event) => { input = event.target;}}
        type='text'
        placeholder='Add table...' />
    </Popup>
);

export default AddTabBtn;