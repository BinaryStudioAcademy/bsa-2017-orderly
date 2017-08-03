import _extends from 'babel-runtime/helpers/extends';
import React from 'react';

import { customPropTypes, getUnhandledProps, META } from '../../lib';
import TableHeader from './TableHeader';

/**
 * A table can have a footer.
 */
function TableFooter(props) {
  var as = props.as;

  var rest = getUnhandledProps(TableFooter, props);

  return React.createElement(TableHeader, _extends({}, rest, { as: as }));
}

TableFooter.handledProps = ['as'];
TableFooter._meta = {
  name: 'TableFooter',
  type: META.TYPES.COLLECTION,
  parent: 'Table'
};

process.env.NODE_ENV !== "production" ? TableFooter.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as
} : void 0;

TableFooter.defaultProps = {
  as: 'tfoot'
};

export default TableFooter;