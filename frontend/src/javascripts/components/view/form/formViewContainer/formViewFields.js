import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

export default class FormViewFields extends Component{
    render() {
        return (
            <div className='form-inputs-list-wrapper'>
                <div className='form-inputs-list'>
                    <div className='form-inputs-list-item'>
                        <div className='form-inputs-name'>Simple text</div>      
                        <input className='input-form' type='text'/>
                    </div>
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
                </div>
                <div className='submit-btn'>
                    <Button type='submit'>Sumbit form</Button>
                </div>
            </div>
        );
    }
}
