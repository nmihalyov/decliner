;(function () {
	'use strict';
	const arrObject = Array;

	arrObject.prototype.decline = function(num) {
		const arr = this;
		var result = '';

		try {
			if (arr.length !== 3) throw new SyntaxError('array must have 3 elements');

			arr.forEach(function(el, i) {
				if (typeof(el) !== "string") throw new TypeError('element #' + (i + 1) + " is not a string in array");
			});

			if (typeof(num) !== "number") throw new TypeError('decline() argument is not a number');
		} catch (e) {
			console.error('decliner.js error: ' + e.name + ' - ' + e.message);
		}

		return result;
	}
})();