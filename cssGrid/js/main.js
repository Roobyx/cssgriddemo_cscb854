'use strict';

function Tabs() {
	let bind = function() {
		let menuButtons = document.querySelectorAll('[tab]');
		for(let i = 0; i < menuButtons.length ; i++) {
			menuButtons[i].addEventListener('click', activate, false);
		}
	}

	let clear = function() {
		let menuButtons = document.querySelectorAll('[tab]');
		for(let i = 0; i < menuButtons.length ; i++) {

			menuButtons[i].classList.remove('currentTab');
			
			let id = menuButtons[i].getAttribute('tab');
			
			document.getElementById(id).classList.remove('currentTab');
		}
	}

	let activate = function(e) {
		clear();
		e.target.classList.add('currentTab');
		let element = e.currentTarget.getAttribute('tab');
		document.getElementById(element).classList.add('currentTab');
	}

	bind();
}

let connectTabs = new Tabs();
