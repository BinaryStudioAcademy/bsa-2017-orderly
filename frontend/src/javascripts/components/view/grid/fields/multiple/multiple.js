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
            
        let indexes = []
        let newValues = this.props.value.split(',');

        for (let j in newValues) {
            indexes[j] = propsOptions.indexOf(newValues[j])
        }
        console.log(this.props.value)
        console.log(indexes)
        this.state = {
            options:options,
            value: indexes,
            label:[]
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
        let options2 = [];
        let propsOptions2=nextProps.currentField.options.multiple;
        let i = 0;
        for (let option in propsOptions2) {
        options2.push({
                value: i++, 
                label: propsOptions2[option],
            })
        }
        //     let indexes2 = []
        //     debugger
        // if (nextProps.value) {
        //     let newValues2 = nextProps.value.split(',');
        //     for (let k in newValues2) {
        //         indexes2[k] = propsOptions2.indexOf(newValues2[k])
        //     }
            
        // }
        
        this.setState({ 
            options: options2,
            //value: indexes2
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
                            labelArr[i]=event[i].label;
                        } 
                        let valueArr=[...this.state.value];
                        for ( let i in event) {
                            valueArr[i]=event[i].value;
                        } 
                            
                            console.log('event', valueArr )
                        this.setState({value: valueArr, label: labelArr})}}
                    onBlur={(event) => this.props.onBlurComponent(this.props.id, this.state.label)}
                    autoFocus={true}
                />
            </div>

        )
    }
}

export default MultipleSelect;