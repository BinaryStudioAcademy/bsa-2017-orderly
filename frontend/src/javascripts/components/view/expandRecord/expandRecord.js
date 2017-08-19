import React from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

import logoImage from '../../../../images/logo.png';
import './expandRecord.scss';
import TextLine from '../grid/fields/textLine/textLine';
import LongText from '../grid/fields/longText/longText';
import Number from '../grid/fields/number/number';

class ExpandRecord extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <Modal trigger={
                <Button>
                    <Icon name='expand'/>Expand record
                </Button>}>
                <Modal.Header>Profile Picture</Modal.Header>
                <Modal.Content image scrolling>
                    <Modal.Description className="modal">
                        <Header>Modal Header</Header>
                        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
                        <TextLine/>
                        <LongText/>
                        <Number/>

                    </Modal.Description>

                    <Image
                        size='medium'
                        src={logoImage}
                        wrapped
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button primary>
                        Proceed <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}



export default ExpandRecord;