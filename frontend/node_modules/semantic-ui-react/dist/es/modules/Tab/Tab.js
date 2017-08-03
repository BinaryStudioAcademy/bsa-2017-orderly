import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _get from 'lodash/get';
import _map from 'lodash/map';
import _invoke from 'lodash/invoke';

import PropTypes from 'prop-types';
import React from 'react';

import { AutoControlledComponent as Component, customPropTypes, getElementType, getUnhandledProps, META } from '../../lib';
import Menu from '../../collections/Menu/Menu';
import TabPane from './TabPane';

/**
 * A Tab is a hidden section of content activated by a Menu.
 * @see Menu
 * @see Segment
 */

var Tab = function (_Component) {
  _inherits(Tab, _Component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.handleItemClick = function (e, _ref2) {
      var index = _ref2.index;

      _invoke(_this.props, 'onTabChange', e, _extends({}, _this.props, { activeIndex: index }));
      _this.trySetState({ activeIndex: index });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab, [{
    key: 'getInitialAutoControlledState',
    value: function getInitialAutoControlledState() {
      return { activeIndex: 0 };
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      var _props = this.props,
          menu = _props.menu,
          panes = _props.panes;
      var activeIndex = this.state.activeIndex;


      return Menu.create(menu, {
        overrideProps: {
          items: _map(panes, 'menuItem'),
          onItemClick: this.handleItemClick,
          activeIndex: activeIndex
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var panes = this.props.panes;
      var activeIndex = this.state.activeIndex;


      var menu = this.renderMenu();
      var rest = getUnhandledProps(Tab, this.props);
      var ElementType = getElementType(Tab, this.props);

      return React.createElement(
        ElementType,
        rest,
        menu.props.attached !== 'bottom' && menu,
        _invoke(_get(panes, '[' + activeIndex + ']'), 'render', this.props),
        menu.props.attached === 'bottom' && menu
      );
    }
  }]);

  return Tab;
}(Component);

Tab.autoControlledProps = ['activeIndex'];
Tab.defaultProps = {
  menu: { attached: true, tabular: true }
};
Tab._meta = {
  name: 'Tab',
  type: META.TYPES.MODULE
};
Tab.Pane = TabPane;
Tab.handledProps = ['activeIndex', 'as', 'defaultActiveIndex', 'menu', 'onTabChange', 'panes'];
process.env.NODE_ENV !== "production" ? Tab.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** The initial activeIndex. */
  defaultActiveIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Index of the currently active tab. */
  activeIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Shorthand props for the Menu. */
  menu: PropTypes.object,

  /**
   * Called on tab change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed new activeIndex.
   * @param {object} data.activeIndex - The new proposed activeIndex.
   */
  onTabChange: PropTypes.func,

  /**
   * Array of objects describing each Menu.Item and Tab.Pane:
   * {
   *   menuItem: 'Home',
   *   render: () => <Tab.Pane>Welcome!</Tab.Pane>
   * }
   */
  panes: PropTypes.arrayOf(PropTypes.shape({
    menuItem: customPropTypes.itemShorthand,
    render: PropTypes.func.isRequired
  }))
} : void 0;


export default Tab;