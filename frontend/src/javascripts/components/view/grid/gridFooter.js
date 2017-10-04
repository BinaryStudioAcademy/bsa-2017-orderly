import React, {Component} from 'react';
import './gridFooter.scss';
import TotalField from './footerItems/totalField';

export default class GridFooter extends Component {

    render() {
        const footerItems = this.props.currentTable.fields.map((elem, index) => {
            return <TotalField
                total={elem.footerTotal}
                count={elem.count}
                key={Date.now() - index}
                typeValue={elem.type}
            />;
        });
        return (
            <div className="footer__wrap">
                <TotalField total={footerItems.length} typeValue="index" key={Date.now()}/> {/* for index col */}
                {footerItems}
            </div>
        );
    }
}

