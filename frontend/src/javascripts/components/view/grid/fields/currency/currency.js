import React from 'react';
import { Input } from 'semantic-ui-react';
import CurrencyInput from 'react-currency-input';
import Field from '../field';
import './currency.scss';

class CurrencyField extends Field {
    constructor(props){
        super(props);
     this.state = { amount: '' }
    }

    handleChange(event, maskedvalue, floatvalue){
        this.setState({amount: maskedvalue});
    }

    render() {
        return  <CurrencyInput value={this.state.amount} 
        prefix="$" allowNegative={true}
        precision="2" 
        className="currency-input"
        onChangeEvent={this.handleChange.bind(this)}/>
    }
}

export default CurrencyField;
