import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

import logoImage from '../../../../images/logo.png';
import * as TextLineActions from '../grid/fields/textLine/textLineActions';
import * as LongTextActions from '../grid/fields/longText/longTextActions';
import * as NumberActions from '../grid/fields/number/numberActions';
import * as ExpandRecordActions from './expandRecordActions';
import './expandRecord.scss';
import TextLineContainer from '../grid/fields/textLine/textLineContainer';
import LongTextContainer from '../grid/fields/longText/longTextContainer';
import NumberContainer from '../grid/fields/number/numberContainer';

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
                        <TextLineContainer/>
                        <LongTextContainer/>
                        <NumberContainer/>

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

/*
                        {_.times(8, i => (
                            <Image
                                key={i}
                                src='/assets/images/wireframe/paragraph.png'
                                style={{ paddingBottom: 5 }}
                            />
                        ))}*/

/*
ExpandRecord.propTypes = {
    redirectLoggedInUser: PropTypes.func.isRequired,
    changeUserData: PropTypes.func.isRequired,
    performExpandRecord: PropTypes.func.isRequired,
    expandRecord: PropTypes.object.isRequired
};*/

function mapStateToProps(state) {
    return {
        expandRecord: state.expandRecordReducer,
        textLine: state.textLineReducer,
        longText: state.longTextReducer,
        number: state.numberReducer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, ExpandRecordActions,
        TextLineActions, LongTextActions, NumberActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpandRecord);