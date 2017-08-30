import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import {Icon} from 'semantic-ui-react';

export default class FormViewFields extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='form-inputs-list-wrapper'>
                <div className='form-inputs-list'>
                    {this.props.fields.map((field, ind) => {
                        if(this.props.included.includes(field._id)) {
                            return (
                                <div key={ind} className='form-inputs-list-item'>
                                    <div className='form-inputs-name'>
                                        <span>{field.name}</span>
                                        <Icon name="delete" className="form-inputs-delete"
                                              onClick={() => this.props.excludeField(field._id)}/>
                                    </div>
                                    <input className='input-form' type='text'/>
                                </div>
                            );
                        }
                    })}
                </div>
                <div className='submit-btn'>
                    <Button type='submit'>Sumbit form</Button>
                </div>
            </div>
        );
    }
}

/*
<div className='form-inputs-list-item'>
    <div className='form-inputs-name'>Long-text</div>
    <input className='input-form' type='text'/>
</div>
<div className='form-inputs-list-item'>
    <div className='form-inputs-name'>Number</div>
<input className='input-form' type='text'/>
</div>
<div className='form-inputs-list-item'>
    <div className='form-inputs-name'>Url</div>
    <input className='input-form' type='text'/>
</div>
<div className='form-inputs-list-item'>
    <div className='form-inputs-name'>Date</div>
<input className='input-form' type='text'/>
</div>
*/