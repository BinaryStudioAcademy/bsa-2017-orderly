import React from 'react';
import './singleSelect.scss';
import Field from '../field';

const options = [
    { key: 'An', value: 'AT', text: 'Ananas' }
];

class SingleSelect  extends Field {
  constructor(props) {
    super(props);
    }
    renderActiveField() {
        return (
            <select className='single-select-container'
                onBlur={(event) => this.props.onBlurComponent(this.props.id, event.target.value)}
                autoFocus={true}
            >
                {this.props.currentField.options.map((option, i) => {
                    return ( 
                    <option key={i}>{option}</option>
                    )})}
            </select>

        )
    }
}

export default SingleSelect;