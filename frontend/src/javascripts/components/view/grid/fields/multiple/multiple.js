import React from 'react';
import Select from 'react-select';
import './multiple.scss';
import Field from '../field';

class MultipleSelect  extends Field {
    constructor(props) {
        super(props);
        this.state = {
            options:[],
            value: [],
            label:[]
        }
    }

    componentWillReceiveProps(nextProps) {
        let options = [];
        let propsOptions=this.props.currentField.options.multiple;
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
            <div className='multiple-select-container'>
                <Select options={this.state.options}
                    multi={true}
                    value={this.state.value}
                    onChange = {(event) => {
                        let labelArr=[];
                        for ( let i in event) {
                            labelArr[i]=` ${event[i].label}`;
                        }
                        this.setState({value: event, label: labelArr})}}
                    onBlur={(event) => this.props.onBlurComponent(this.props.id, this.state.label)}
                    autoFocus={true}
                />
            </div>

        )
    }
}

export default MultipleSelect;