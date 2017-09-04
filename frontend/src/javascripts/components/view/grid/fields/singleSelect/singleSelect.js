import React from 'react';
import './singleSelect.scss';
import Field from '../field';

class SingleSelect  extends Field {
  constructor(props) {
    super(props);
    }
    renderActiveField() {
        return (
            <select className='single-select-container'
                onBlur={(event) => this.props.onBlurComponent(this.props.id, event.target.value)}
                autoFocus={this.props.autoFocus}
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