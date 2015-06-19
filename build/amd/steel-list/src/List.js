define(['exports', 'module', 'metal/src/soy/SoyComponent', 'metal/src/component/ComponentRegistry', 'steel-list/src/List.soy'], function (exports, module, _metalSrcSoySoyComponent, _metalSrcComponentComponentRegistry, _steelListSrcListSoy) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _SoyComponent2 = _interopRequireDefault(_metalSrcSoySoyComponent);

	var _ComponentRegistry = _interopRequireDefault(_metalSrcComponentComponentRegistry);

	/**
  * List component.
  */

	var List = (function (_SoyComponent) {
		function List(opt_config) {
			_classCallCheck(this, List);

			_get(Object.getPrototypeOf(List.prototype), 'constructor', this).call(this, opt_config);
		}

		_inherits(List, _SoyComponent);

		_createClass(List, [{
			key: 'handleClick',

			/**
    * Handles click event on the list. The function fires an
    * {@code itemSelected} event.
    *
    * @protected
    * @param {Event} event The native click event
    */
			value: function handleClick(event) {
				this.emit('itemSelected', event.delegateTarget);
			}
		}]);

		return List;
	})(_SoyComponent2['default']);

	/**
  * Default list elementClasses.
  * @default list
  * @type {String}
  * @static
  */
	List.ELEMENT_CLASSES = 'list';

	/**
  * List attributes definition.
  * @type {Object}
  * @static
  */
	List.ATTRS = {
		/**
   * The list items. Each is represented by an object that can have the following keys:
   *   - textPrimary: The item's main content.
   *   - textSecondary: (Optional) The item's help content.
   *   - icons: (Optional) A list of icon css classes to render on the right side.
   *   - avatar: (Optional) An object that specifies the avatar's content and, optionally, a css
   *       class it should use.
   * @type {!Array<!Object>}
   * @default []
   */
		items: {
			validator: Array.isArray,
			valueFn: function valueFn() {
				return [];
			}
		}
	};

	_ComponentRegistry['default'].register('List', List);

	module.exports = List;
});