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

/*
<div className='availableFormField-Item'>
    <div className='columnName-TypeIcon-Container'>
        <Icon name={fieldIcons.text}/>
        <span className='field-name'>Simple text</span>
        <div className='remove-icon-wrapper'>
            <Icon name='plus square outline' color='grey'/>
        </div>
    </div>
</div>

<div className='availableFormField-Item'>
    <div className='columnName-TypeIcon-Container'>
    <Icon name={fieldIcons.longtext}/>
<span className='field-name'>Long-text</span>
<div className='remove-icon-wrapper'>
    <Icon name='plus square outline' color='grey'/>
    </div>
</div>
</div>

<div className='availableFormField-Item'>
    <div className='columnName-TypeIcon-Container'>
        <Icon name={fieldIcons.number}/>
        <span className='field-name'>Number</span>
        <div className='remove-icon-wrapper'>
            <Icon name='plus square outline' color='grey'/>
        </div>
        </div>
    </div>

    <div className='availableFormField-Item'>
        <div className='columnName-TypeIcon-Container'>
            <Icon name={fieldIcons.select}/>
            <span className='field-name'>Single select</span>
            <div className='remove-icon-wrapper'>
                <Icon name='plus square outline' color='grey'/>
            </div>
        </div>
        </div>

        <div className='availableFormField-Item'>
            <div className='columnName-TypeIcon-Container'>
                <Icon name={fieldIcons.autonumber}/>
                <span className='field-name'>Auto number</span>
                <div className='remove-icon-wrapper'>
                    <Icon name='plus square outline' color='grey'/>
                </div>
            </div>
        </div>

        <div className='availableFormField-Item'>
        <div className='columnName-TypeIcon-Container'>
        <Icon name={fieldIcons.url}/>
        <span className='field-name'>URL</span>
        <div className='remove-icon-wrapper'>
        <Icon name='plus square outline' color='grey'/>
        </div>
    </div>
</div>

<div className='availableFormField-Item'>
    <div className='columnName-TypeIcon-Container'>
        <Icon name={fieldIcons.currency}/>
        <span className='field-name'>Currency</span>
        <div className='remove-icon-wrapper'>
            <Icon name='plus square outline' color='grey'/>
        </div>
        </div>
    </div>

    <div className='availableFormField-Item'>
        <div className='columnName-TypeIcon-Container'>
            <Icon name={fieldIcons.date}/>
            <span className='field-name'>Date</span>
            <div className='remove-icon-wrapper'>
                <Icon name='plus square outline' color='grey'/>
            </div>
        </div>
        </div>
*/