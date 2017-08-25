import React, {Component} from 'react';
import FormViewFields from './formViewFields';
import './formViewContainer.scss';
import logo from '../../../../../images/logo.png';

export default class FormViewContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='formContainer'>
                <div className='form-wrapper'>
                    <div className='formHeaderContainer'>
                        <div className='container1'>
                            <div className='container2'>
                                <div className='cover-image'>
                                    <div className='cover-image2'/>
                                </div>
                                <div className='form-name-block-wrapper'>
                                    <div className='form-name-block'>
                                        <div className='form-name-logo'>
                                            <img src={logo}/>
                                        </div>
                                        <div>
                                            <div className='form-name'>Form 1</div>
                                        </div>
                                        <div className='form-description'>
                                            Add a description of this form
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <FormViewFields fields={this.props.currentTable.fields}
                                    included={this.props.included}
                                    excludeField={this.props.excludeField}/>
                </div>
            </div>
        );
    }
}
