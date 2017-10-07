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
		scrollTo(0, 100);
	}


	function scrollTo(to, duration) {
		var $body = document.body;

		if (duration < 0) return;

		var difference = to - $body.scrollTop;
		var perTick = difference / duration * 2;

		setTimeout(function () {
			$body.scrollTop = $body.scrollTop + perTick;
			scrollTo(to, duration - 2);
		}, 10);

	}

}(window));