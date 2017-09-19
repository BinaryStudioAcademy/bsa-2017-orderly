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
                    if (!this.props.included.includes(field._id) && field.type !== 'autonumber') {
                        return (
                            <div key={ind} className='availableFormField-Item'
                                 onClick={() => this.props.includeField(field._id, this.props.currentTableId, this.props.currentViewId)}>
                                <div className='columnName-TypeIcon-Container'>
                                    <div className='icon-field-type'>
                                        <Icon name={fieldIcons[field.type]}/>
                                    </div>
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
