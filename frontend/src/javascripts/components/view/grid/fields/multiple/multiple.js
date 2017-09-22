import React from 'react';
import Select from 'react-select';
import './multiple.scss';
import Field from '../field';

class MultipleSelect  extends Field {
    constructor(props) {
        super(props, 'multiple');
        let options = [];
        let propsOptions=this.props.currentField.options.multiple;
        let i = 0;
        for (let option in propsOptions) {
        options.push({
                value: i++,
                label: propsOptions[option],
            })
        }

        let valuesArr, valuesArrIndex;
        if (this.props.value) {
            valuesArr = this.props.value.split(',');
            valuesArrIndex= [];
            for (let k = 0; k < valuesArr.length; k++) {
                for (let j = 0; j < propsOptions.length; j++) {
                    if (valuesArr[k] ===  propsOptions[j]) {
                        valuesArrIndex.push(j);
                    }
                }
            }
        }

        this.state = {
            options: options,
            valueSelected:valuesArrIndex || '',
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
        let value=[...this.state.valueSelected];


        this.setState({ 
            options: options
        });
    }

    renderActiveField() {
        return (
            <div className='multiple-select-container'>
                <Select options={this.state.options}
                    multi={true}
                    value={this.state.valueSelected}
                    onChange = {(event) => {
                        let labelArr=[], value =[];
                        for ( let i in event) {
                            labelArr[i]=event[i].label;
                            value[i] = Number(i);
                        }
                        this.setState({valueSelected: value, label: labelArr})}}
                    onBlur={(event) => this.props.onBlurComponent(this.props.id, this.state.label)}
                    autoFocus={true}
                />
            </div>

        )
    }
}

export default MultipleSelect;