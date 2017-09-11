import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as formViewActions from './formViewActions';
import FormAvailableFields from './formViewAvailableFields/formViewAvailableFields';
import FormViewHeader from './formViewHeader/formViewHeader';
import FormViewContainer from './formViewContainer/formViewContainer';
import {Button} from 'semantic-ui-react';
import './formView.scss';

class FormView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='form-view-wrapper-page'>
                <FormViewHeader
                    deleteView={this.props.deleteView}
                    viewsCount={this.props.viewsCount}
                />
                <div className='form-mega-wrapper'>
                    <div className='form-body-wrapper'>
                        <FormAvailableFields currentTable={this.props.currentTable}
                                             changeView={this.props.changeView}
                                             included={this.props.formView.included}
                                             includeField={this.props.includeField}
                                             includeAll={this.props.includeAll}
                                             excludeAll={this.props.excludeAll}/>
                        <FormViewContainer currentTable={this.props.currentTable}
                                           included={this.props.formView.included}
                                           excludeField={this.props.excludeField}/>
                    </div>
                    <Button type='submit'>Submit form</Button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        formView: state.formView
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(formViewActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormView);
