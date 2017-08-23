import React from 'react';
import { Input } from 'semantic-ui-react';
import CurrencyInput from 'react-currency-input';
import Field from '../field';
import './currency.scss';

class CurrencyField extends Field {
    constructor(props){
        super(props, 'text-line');
        this.state = { 
        amount: '' 
        }
    }

    handleChange(event, maskedvalue, floatvalue){
        this.setState({amount: maskedvalue});
    }

    renderActiveField() {
        return  (
            <CurrencyInput value={this.state.amount} 
                prefix="$" allowNegative={true}
                precision="2" 
                className="currency-input"
                onChangeEvent={this.handleChange.bind(this)}
                onBlur={(event) => this.props.onBlurComponent(this.props.id, event.target.value)}
                autoFocus={true}
            />
        )
    }
}

export default CurrencyField;
