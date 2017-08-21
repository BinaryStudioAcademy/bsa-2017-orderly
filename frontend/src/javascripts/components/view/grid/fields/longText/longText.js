import React from 'react';
import { TextArea, Icon } from 'semantic-ui-react';
import Field from '../field';
import './longText.scss';

class LongText extends Field {
    constructor(props){
        super(props, 'long-text');
    }

    renderSelectedField() {
        return (
            <div>
                <div className="table-cell-inner">{this.props.value}</div>
                <Icon name='expand'
                    className='expand-icon'
                    link
                    onClick={() => this.props.onExpand(this.props.id)}
                />
            </div>
        );
    }

    renderActiveField() {
        return (
            <div>
                <TextArea
                    onChange={(event) => this.props.onChange(this.props.id, event.target.value)}
                    onBlur={() => this.props.onBlurComponent(this.props.id)}
                    value={this.props.value}
                    type='text'
                    autoFocus={true}
                    icon={{ name: 'expand', link: true, onClick: () => {
                        this.props.onExpand(this.props.id);
                    }}}
                />
                <Icon name='expand'
                    className='expand-icon'
                    link
                    onClick={() => this.props.onExpand(this.props.id)}
                />
            </div>
        );
    }
}

export default LongText;