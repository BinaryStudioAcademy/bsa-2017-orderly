import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import { fieldIcons } from '../../../configuration/fieldTypes'

export default class FormViewListOfFields extends Component{
    render() {
        return (

        <div className='availableFormFields-List'> 
            
            <div className='availableFormFields-List'> 
                <div className='availableFormField-Item'>
                    <div className='columnName-TypeIcon-Container'>
                        <Icon name={fieldIcons.text} />
                        <span className='field-name'>Simple text</span>
                        <div className='remove-icon-wrapper'>
                            <Icon name='plus square outline' color='grey' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='availableFormField-Item'>
                <div className='columnName-TypeIcon-Container'>
                    <Icon name={fieldIcons.longtext} />
                    <span className='field-name'>Long-text</span>
                    <div className='remove-icon-wrapper'>
                        <Icon name='plus square outline' color='grey' />
                    </div>
                </div>
            </div>

            <div className='availableFormField-Item'>
                <div className='columnName-TypeIcon-Container'>
                    <Icon name={fieldIcons.number} />
                    <span className='field-name'>Number</span>
                    <div className='remove-icon-wrapper'>
                        <Icon name='plus square outline' color='grey' />
                    </div>
                </div>
            </div>

            <div className='availableFormField-Item'>
                <div className='columnName-TypeIcon-Container'>
                    <Icon name={fieldIcons.select} />
                    <span className='field-name'>Single select</span>
                    <div className='remove-icon-wrapper'>
                        <Icon name='plus square outline' color='grey' />
                    </div>
                </div>
            </div>

            <div className='availableFormField-Item'>
                <div className='columnName-TypeIcon-Container'>
                    <Icon name={fieldIcons.autonumber} />
                    <span className='field-name'>Auto number</span>
                    <div className='remove-icon-wrapper'>
                        <Icon name='plus square outline' color='grey' />
                    </div>
                </div>
            </div>

            <div className='availableFormField-Item'>
                <div className='columnName-TypeIcon-Container'>
                    <Icon name={fieldIcons.url} />
                    <span className='field-name'>URL</span>
                    <div className='remove-icon-wrapper'>
                        <Icon name='plus square outline' color='grey' />
                    </div>
                </div>
            </div>

            <div className='availableFormField-Item'>
                <div className='columnName-TypeIcon-Container'>
                    <Icon name={fieldIcons.currency} />
                    <span className='field-name'>Currency</span>
                    <div className='remove-icon-wrapper'>
                        <Icon name='plus square outline' color='grey' />
                    </div>
                </div>
            </div>

                <div className='availableFormField-Item'>
                    <div className='columnName-TypeIcon-Container'>
                        <Icon name={fieldIcons.date} />
                        <span className='field-name'>Date</span>
                        <div className='remove-icon-wrapper'>
                            <Icon name='plus square outline' color='grey' />
                        </div>
                    </div>
                </div>

        </div>
        );
    }
}
