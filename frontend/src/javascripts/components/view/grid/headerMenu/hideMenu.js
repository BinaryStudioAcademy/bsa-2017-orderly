import React, {Component} from 'react';
import {Icon, Button, Popup, Header, List } from 'semantic-ui-react';
import Select from 'react-select';

export default class PopupHideColumn extends Component{
    constructor(props) {
        super(props);
        let fields = this.props.currentTable.fields    
        let hideFields = [];
        for (let field in fields) {
            if (fields[field].display == false) {   
                hideFields.push({
                    id: fields[field]._id,
                    name: fields[field].name,
                })
            }
        }

        let propsOptions=[];
        let propsIds=[];
        let i = 0
        for (let item in fields) {
            if (fields[item].display == true) { 
                propsOptions[i] = fields[item].name
                propsIds[i] = fields[item]._id
                i += 1;
            }
        }

        let options = [];
        for (let option in propsOptions) {
        options.push({
                value: propsIds[option],
                label: propsOptions[option],
            })
        }
        this.state = {
            value:'',
            label:'',
            hided: hideFields,
            options: options,
            count: hideFields.length
        }

    }
    componentWillReceiveProps(nextProps) {
        let fields = nextProps.currentTable.fields;
        let hideFields = [];
        for (let field in fields) {
            if (fields[field].display == false) {   
                hideFields.push({
                    id: fields[field]._id,
                    name: fields[field].name,
                })
            }
        }
        let propsOptions=[];
        let propsIds=[];
        let i = 0
        for (let item in fields) {
            if (fields[item].display == true) {   
                propsOptions[i] = fields[item].name
                propsIds[i] = fields[item]._id
                i += 1;
            }
        }

        let options = [];
        for (let option in propsOptions) {
        options.push({
                value: propsIds[option],
                label: propsOptions[option],
            })
        }

        this.setState({options: options, hided: hideFields, count: hideFields.length})
    }
    handleHide = (event) => {
        this.setState({value: event.value, label: event.label})
        //this.props.changeFieldDisplay(this.props.currentTable._id, event.value, 'false')
        this.props.updateViewHideField(this.props.currentViewId,  event.value, 'true')
    }
    handleUnhide = (event, id) => {
        //this.props.changeFieldDisplay(this.props.currentTable._id, id, 'true')
        this.props.updateViewHideField(this.props.currentViewId,  event.value, 'false')
    }

    render() {
        let hideText = this.state.count != 0? `${this.state.count} Hide fields:`:'Hide fields'
        return (
          <Popup wide
            trigger={<Button basic>
                        <Icon name='hide'/>
                        <span className="menu__text">{hideText}</span>
                    </Button>}
            content={
                <div className='form-share-popup-wrapper'> 
                    <div className='form-share-header'>
                        <Header as='h5'>Select a field to hide: </Header>
                    </div>
                    <Select options={this.state.options}
                        value={this.state.value}
                        onChange = {(event) => {this.handleHide(event)}}
                    />
                    <div>
                        <div className='hide-header'><Header as='h5'>Hided fields</Header></div>
                        <List>
                        { 
                            this.state.hided.map((field, current) => {
                            return (
                              <List.Item className='option-list-item' key={current}>
                                <List.Content floated='left'>{field.name}</List.Content>
                                <List.Content floated='right'>
                                    <Icon name='unhide' link color='grey' onClick={(event) =>this.handleUnhide(event, field.id)}/> 
                                </List.Content>
                              </List.Item>
                            )})
                        }
                    </List>
                    </div>
                </div>
            }
            on='click'
            position='bottom left'
          />
        )
    }
}