'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.removeAll = _this.removeAll.bind(_this);
		_this.choose = _this.choose.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.delOption = _this.delOption.bind(_this);
		_this.state = {
			options: props.options
		};
		return _this;
	}

	_createClass(IndecisionApp, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			try {
				var json = localStorage.getItem('options');
				var options = JSON.parse(json);
				if (options) {
					this.setState(function () {
						return { options: options };
					});
				}
			} catch (e) {
				//pass
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.options.length !== this.state.options.length) {
				var json = JSON.stringify(this.state.options);
				localStorage.setItem('options', json);
			}
		}
	}, {
		key: 'removeAll',
		value: function removeAll() {
			this.setState(function () {
				return { options: [] };
			});
		}
	}, {
		key: 'delOption',
		value: function delOption(optionToRemove) {
			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (option) {
						return option !== optionToRemove;
					})
				};
			});
		}
	}, {
		key: 'choose',
		value: function choose() {
			var randNum = Math.floor(Math.random() * this.state.options.length);
			var option = this.state.options[randNum];
			console.log(option);
			alert(option);
		}
	}, {
		key: 'handleAddOption',
		value: function handleAddOption(option) {
			if (!option) {
				return 'input field is empty';
			} else if (this.state.options.indexOf(option) > -1) {
				return 'same task already exist';
			}

			this.setState(function (prevState) {
				return { options: prevState.options.concat(option) };
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var subtitle = "Just an another todo list web app";
			return React.createElement(
				'div',
				null,
				React.createElement(Header, { subtitle: subtitle }),
				React.createElement(Action, {
					hasOptions: this.state.options.length > 0,
					choose: this.choose
				}),
				React.createElement(Options, {
					delOption: this.delOption,
					removeAll: this.removeAll,
					options: this.state.options }),
				React.createElement(AddOption, {
					handleAddOption: this.handleAddOption
				})
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
	options: []
};

var Header = function Header(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			props.title
		),
		props.subtitle && React.createElement(
			'h2',
			null,
			props.subtitle
		)
	);
};

Header.defaultProps = {
	title: 'Indecision'
};

var Action = function Action(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{
				disabled: !props.hasOptions,
				onClick: props.choose },
			'What should ninja do?'
		)
	);
};

var Options = function Options(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.removeAll },
			'Remove All'
		),
		props.options.length == 0 && React.createElement(
			'p',
			null,
			'add something'
		),
		props.options.map(function (option) {
			return React.createElement(Option, {
				key: option,
				delOption: props.delOption,
				optionText: option });
		})
	);
};

var Option = function Option(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'li',
			null,
			props.optionText
		),
		React.createElement(
			'button',
			{
				onClick: function onClick(e) {
					props.delOption(props.optionText);
				}
			},
			'remove'
		)
	);
};

var AddOption = function (_React$Component2) {
	_inherits(AddOption, _React$Component2);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.handleAddOption = _this2.handleAddOption.bind(_this2);
		_this2.state = {
			err: undefined
		};
		return _this2;
	}

	_createClass(AddOption, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			e.preventDefault();
			var option = e.target.elements.option.value.trim();
			var err = this.props.handleAddOption(option);
			if (err) {
				this.setState(function () {
					return { err: err };
				});
			} else {
				this.setState(function () {
					return { err: undefined };
				});
			}

			e.target.elements.option.value = '';
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.state.err && React.createElement(
					'p',
					null,
					' ',
					this.state.err,
					' '
				),
				React.createElement(
					'form',
					{ onSubmit: this.handleAddOption },
					React.createElement('input', { type: 'text', placeholder: 'add task', name: 'option' }),
					React.createElement(
						'button',
						null,
						'Add'
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
