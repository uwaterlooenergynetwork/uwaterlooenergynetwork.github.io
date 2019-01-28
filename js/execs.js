//use to convert jsx to js files
//npx babel --watch js/jsx --out-dir js --presets react-app/prod

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;
var execs = [{
	name: "Cameron Martin",
	position: "President",
	program: "Nanotechnology Engineering",
	img: "cameron.png"
}, {
	name: "Aidan O'Gorman",
	position: "VP External",
	program: "Chemical Engineering",
	img: "aidan.png"
}, {
	name: "Jamie Pinheiro",
	position: "VP Tech",
	program: "Computer Science",
	img: "jamie.png"
}, {
	name: "Emma Lozkins",
	position: "VP Tech",
	program: "Computer Engineering",
	img: "headshot.png"
}, {
	name: "Gloria Li",
	position: "??",
	program: "Accounting and Financial Management",
	img: "gloria.png"
}, {
	name: "Akshar Goyal",
	position: "??",
	program: "Computer Science",
	img: "akshar.png"
}, {
	name: "Maya Gupta",
	position: "??",
	program: "Management Engineering",
	img: "maya.png"
}, {
	name: "Guy Brodsky",
	position: "??",
	program: "??",
	img: "headshot.png"
}, {
	name: "Matthew Teelucksingh",
	position: "??",
	program: "??",
	img: "headshot.png"
}];

var Execs = function (_React$Component) {
	_inherits(Execs, _React$Component);

	function Execs(props) {
		_classCallCheck(this, Execs);

		return _possibleConstructorReturn(this, (Execs.__proto__ || Object.getPrototypeOf(Execs)).call(this, props));
	}

	_createClass(Execs, [{
		key: "render",
		value: function render() {

			return React.createElement(
				"div",
				{ className: "row col-12" },
				execs.map(function (exec) {
					return React.createElement(
						"div",
						{ className: "col-lg-4 col-md-6 col-sm-10 text-center p-2 mb-3" },
						React.createElement("img", { className: "col-12 headshot", src: "img/headshots/" + exec.img, alt: "img/headshots/headshot.png" }),
						React.createElement(
							"h3",
							{ className: "p-3" },
							exec.name
						),
						React.createElement(
							"h4",
							null,
							exec.position
						),
						React.createElement(
							"h4",
							null,
							exec.program
						)
					);
				})
			);
		}
	}]);

	return Execs;
}(React.Component);

var domContainer = document.querySelector('#execs');
ReactDOM.render(e(Execs), domContainer);