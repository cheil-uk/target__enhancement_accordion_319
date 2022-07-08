// ==========================================================================
//  This is a boilerplate to use for target activities
//
//	URL example: add in url of project for visibility here
// ==========================================================================

// ==========================================================================
// Scripts, helper widgets - import below
// ==========================================================================
import PricePromise from "./components/PricePromise"
import TradeIn from "./components/TradeIn";
import FinanceOptions from "./components/FinanceOptions";
import PopUp from "./components/PopUp/popup";
import Content from "./components/PopUp/content";

var cheillondon = cheillondon || {};

cheillondon.targetBoilerplate = (function () {

	'use strict';

	var main = {

		// ==========================================================================
		// Variables and config Properties add below
		// ==========================================================================


		//Init
		init: function () {
			main.doEverythingTimeout();
		},


		// ==========================================================================
		// Checking jQuery
		// ==========================================================================
		doEverythingTimeout: function () {
			var _self = this;

			console.log('XXX - doEverythingTimeout');

			setTimeout(function () {
				if (window.$) {
					console.log('doEverythingTimeout - jQuery loaded');
					main.appendNewStyle();
					const pricePromse = new PricePromise();
					// const tradeIn = new TradeIn();
					const financeOptions = new FinanceOptions();
					// const popUp = new PopUp("hello world12345");
					// const contentItems = new Content();
					// popUp.popUpContent('test');
					// contentItems.popUpContent();
					// tradeIn.addSection();
					// tradeIn.addContent();
					pricePromse.addSection();
					pricePromse.addContent(main.getPath());
					financeOptions.addSection();
					financeOptions.addContent(`${main.getPath()}Finance`);
					main.addElements();

				} else {
					console.log('no jquery')
					_self.doEverythingTimeout();
				}
			}, 3000)
		},


		// ==========================================================================
		// Adding style
		// ==========================================================================
		appendNewStyle: function () {

			/* FYI: the CSS code is in separated file, in SCSS format that generates the CSS file. After, the gulp file finds the [CSS] and replaces with minified code from file */

			//To insert minified inline string uncomment this variable and paste here
			//Else, use default uncommented variable
			// var _css = '';

			var _css = '[[CSS]]';

			//
			// Adding style definitions to DOM
			// --------------------------------------------------------------------------
			var _head = document.head || document.getElementsByTagName('head')[0],
				_style = document.createElement('style');

			_style.type = 'text/css';
			if (_style.styleSheet) { // This is required for IE8 and below.
				_style.styleSheet.cssText = _css;
			} else {
				_style.appendChild(document.createTextNode(_css));
			}
			_head.appendChild(_style);

		},

		getPath: () => {
			const url = window.location.pathname

			switch (url) {
				case '/uk/watches/galaxy-watch/galaxy-watch4-classic-black-lte-sm-r895fzkaeua/buy/':
					return 'watch'
				case '/uk/watches/galaxy-watch/galaxy-watch4-pink-gold-lte-sm-r865fzdaeua/buy/':
					return 'watch'
				case '/uk/computers/galaxy-book/galaxy-book2-pro/buy/':
					return 'davd'
				case '/uk/tablets/galaxy-tab-s8/buy/':
					return 'tab'
			}
		},

		// ==========================================================================
		// When page is already loaded we need to add the new elements
		// ==========================================================================
		addElements: function () {

			// const selectedButtons = document.querySelectorAll('.selected__retailers__btn');
			// selectedButtons.forEach((selectBtns) => {
			// 	selectBtns.onclick = () => {
			// 		// document.querySelector('.popup__pricepromise__modal').style.display = 'block'
			// 		new PopUp("hello world12345")
			// 	}
			// })
		},


		// ==========================================================================
		// Set Events
		// ==========================================================================
		setEvents: function (elm = '') {

			console.log('XXX - setEvents: ' + elm);

			switch (elm) {
				case 'modal':
					//code to open modal;
					break;
				case 'financePopup':
				//code to open something else;
				default:
					break;
			}



		},

		resizeWindow: function () {
			// as new elements added to panel we need to resize window to activate amend height of Product Panels
			setTimeout(function () {
				$(window).resize();
				console.log('window resized');
			}, 100);
		}


	};
	return {
		main: main
	};

})();

cheillondon.targetBoilerplate.main.init();

