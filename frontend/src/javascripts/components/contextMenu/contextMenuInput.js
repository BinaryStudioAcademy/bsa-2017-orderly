import React from 'react';
import { connect } from 'react-redux';
import { changeBaseTitle } from './contextMenuActions';
import { Popup, Icon, Input } from 'semantic-ui-react';

let BaseName = ({ dispatch }) => {
    let input;
    return (
        <div>
            <form className='base-name'
                onSubmit={(e) => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(changeBaseTitle(input.value));
                    input.value = '';
                }}
            >
                <input placeholder="Base Name" className='base-name-input'
                    ref={(node) => {
                        input = node;
                    }}
                />
            </form>
        </div>
    );
};

BaseName = connect()(BaseName);

export default BaseName;