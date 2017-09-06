import React from 'react';
import Select from 'react-select';
import './multiple.scss';
import Field from '../field';

class MultipleSelect  extends Field {
    constructor(props) {
        super(props, 'multiple');
        let options = [];
        let propsOptions=this.props.currentField.options.multiple;

        for (let option in propsOptions) {
        options.push({
                value: option++, 
                label: propsOptions[option],
            })
        }

        // let newValues =[]
        // let k=0
        // let values = this.props.value.split(',')

        // for ( let j in values ) {
        //      newValues.push({
        //         value: k++, 
        //         label: values[j],
        //     })
        // }
//if you place newValues into valueSelected, in expand records you can not edit the record (but the current selected value will be there)
//if you do not place newValues into valueSelected, then you can edit the record but no preselected value in the input    
        this.state = {
            options: options,
            valueSelected:[],
            label:[]
        }
    }

    componentWillReceiveProps(nextProps) {
        let options = [];
        let propsOptions=this.props.currentField.options.multiple;
        for (let option in propsOptions) {
        options.push({
                value: option++, 
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
                    value={this.state.valueSelected}
                    onChange = {(event) => {
                        let labelArr=[];
                        for ( let i in event) {
                            labelArr[i]=event[i].label;
                        }
                        console.log(event)
                        this.setState({valueSelected: event, label: labelArr})}}
                    onBlur={(event) => this.props.onBlurComponent(this.props.id, this.state.label)}
                    autoFocus={true}
                />
            </div>

        )
    }
}

export default MultipleSelect;