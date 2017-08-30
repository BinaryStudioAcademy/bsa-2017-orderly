import React from 'react';
import { Input } from 'semantic-ui-react';
import NumericInput from 'react-numeric-input';
import Field from '../field';
import './percent.scss';

class Percent extends Field {
    constructor(props){
        super(props, 'text-line');
    }

    // handleChange(event, maskedvalue, floatvalue){
    //     this.setState({amount: maskedvalue});
    // }

    renderActiveField() {
        return  (
            <NumericInput 
                precision="2" 
                className="percent-input"
                onBlur={(event) => this.props.onBlurComponent(this.props.id, event.target.value)}
                autoFocus={true}
            />
        )
    }
}

export default Percent;
