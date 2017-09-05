import React from 'react';
import Select from 'react-select';
import './singleSelect.scss';
import Field from '../field';

class SingleSelect  extends Field {
  constructor(props) {
        super(props);
        this.state = {
            options:[],
            value:'',
            label:''
        }
    }
    componentWillReceiveProps(nextProps) {
        let options = [];
        let propsOptions=this.props.currentField.options.select
        let i = 0;
        for (let option in propsOptions) {
        options.push({
                value: i++,
                label: propsOptions[option],
            })
        }
        this.setState({
            options: options
        });
    }
    renderActiveField() {
        return (
            <div className='single-select-container'>
                <Select options={this.state.options}
                    value={this.state.value}
                    onChange = {(event) => {
                        this.setState({value: event.value, label: event.label})}}
                    onBlur={(event) => this.props.onBlurComponent(this.props.id, this.state.label)}
                    autoFocus={true}
                />
            </div>

        )
    }
}

export default SingleSelect;