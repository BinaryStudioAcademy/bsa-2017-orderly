import { fieldIcons, fieldNames, fieldText } from "../../../configuration/fieldTypes";
import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react';

let fieldOptions = [];
    let num = 0;
    for (let [fieldType, fieldIcon, _] of Object.entries(fieldIcons)) {
    //if (fieldType !== this.props.type) {
        fieldOptions.push(
            {
                key: fieldType,
                text: new Object(
                    <div key={fieldType}
                         className="menu__field-option"
                         >
                        <Icon name={fieldIcon} className="field__icon"/>
                        <span>{fieldNames[fieldType]}</span>
                    </div>
                    ),
                value: ++num
            }
        )
   // }
}

export default fieldOptions