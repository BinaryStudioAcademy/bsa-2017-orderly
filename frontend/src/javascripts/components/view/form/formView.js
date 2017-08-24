import React, {Component} from 'react';
import FormAvailableFields from './formViewAvailableFields/formViewAvailableFields';
import FormViewHeader from './formViewHeader/formViewHeader';
import FormViewContainer from './formViewContainer/formViewContainer';
import {Button} from 'semantic-ui-react';
import './formView.scss'

export default class FormView extends Component{
    render() {
        return (
            <div className='form-view-wrapper-page'>
                <FormViewHeader/>
                <div className='form-mega-wrapper'>
                    <div className='form-body-wrapper'>
                        <FormAvailableFields/>
                        <FormViewContainer/>
                    </div>
                        <Button type='submit'>Sumbit form</Button>
                </div>
            </div>
        );
    }
}
