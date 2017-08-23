import React, {Component} from 'react';
import FormAvailableFields from './formAvailableFields';

export default class FormView extends Component{
    render() {
        return (
            <div>
                FORM VIEW
                <FormAvailableFields/>
                {console.log(this.props)}
            </div>
        );
    }
}
