import React from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import logoImage from '../../../../images/logo.png';
import './expandRecord.scss';
import { Record } from '../grid/gridContent';

const ExpandRecord = ({recordId, record_data, comments, history,
                          recordRecords, fieldEvents, rowNumber}) => {
    return (
        <div className="row-control-container">
            <Modal trigger={
                <Button className="expand-btn">
                    <Icon name='expand'/>
                </Button>}>
                <Modal.Header>Modal Header</Modal.Header>
                <Modal.Content image scrolling>
                    <Modal.Description className="modal">
                        <Header></Header>
                        {record_data.map((record) => {
                            return (
                                <div key={record._id} className="modal__field-item">
                                    <div>
                                        {record.fieldName}
                                    </div>
                                    <Record id={record._id} type={record.type}
                                            data={record.data} fieldEvents={fieldEvents} />
                                </div>
                            )
                        })}

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
        </div>
    );
};



export default ExpandRecord;