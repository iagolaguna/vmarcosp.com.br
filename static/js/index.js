(function (window) {
	'use strict';

	function loaded() {
		var button = new ButtonBackToTop();
		button.render();
	}

	window.addEventListener('DOMContentLoaded', loaded);

	function ButtonBackToTop() {}

	ButtonBackToTop.prototype.render = function () {
		var $body = document.body;
		var $button = document.createElement('button');

		$button.innerHTML = '<span class="fa fa-angle-up"></span>';
		$button.classList.add('btn-back-top');
		$button.addEventListener('click', this._toTop.bind($button));

		$body.appendChild($button);
	}

	ButtonBackToTop.prototype._toTop = function () {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	}


}(window));