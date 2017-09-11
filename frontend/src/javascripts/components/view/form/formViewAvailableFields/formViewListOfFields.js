import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import {fieldIcons} from '../../../configuration/fieldTypes';

export default class FormViewListOfFields extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='availableFormFields-List'>
                {this.props.fields.map((field, ind) => {
                    if (!this.props.included.includes(field._id)) {
                        return (
                            <div key={ind} className='availableFormField-Item'
                                 onClick={() => this.props.includeField(field._id)}>
                                <div className='columnName-TypeIcon-Container'>
                                    <Icon name={fieldIcons[field.type]}/>
                                    <span className='field-name'>{field.name}</span>
                                    <div className='remove-icon-wrapper'>
                                        <Icon name='plus square outline' color='grey'/>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        );
    }
}
