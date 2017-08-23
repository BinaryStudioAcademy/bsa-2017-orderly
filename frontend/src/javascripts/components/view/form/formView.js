import React, {Component} from 'react';
import FormAvailableFields from './formViewAvailableFields';
import FormViewHeader from './formViewHeader';
import FormViewContainer from './formViewContainer';

export default class FormView extends Component{
    render() {
        return (
            <div>
                <FormViewHeader/>
                <FormAvailableFields/>
                <FormViewContainer/>
            </div>
        );
    }
}
