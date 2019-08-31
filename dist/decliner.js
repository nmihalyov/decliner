;(function () {
	'use strict';

	Array.prototype.decline = function (num, insert) {
		const optionsArray = this;
		const absNum = Math.abs(num);
		const cases = [2, 0, 1, 1, 1, 2];
		let result = '';

		insert = insert || false;

		try {
			if (optionsArray.length !== 3) throw new SyntaxError('array must have 3 elements');

			optionsArray.map((el, i) => {
				if (typeof(el) !== 'string') throw new TypeError('element #' + (i + 1) + ' is not a string in array [' + optionsArray + ']');
			});

			if (typeof(num) !== 'number') throw new TypeError('decline() argument is not a number');

			if (typeof(insert) !== 'boolean') throw new TypeError('second argument in decline() should be boolean');

			result = optionsArray[(absNum % 1 !== 0) ? 1 : (absNum % 100 > 4 && absNum % 100 < 20) ? 2 : cases[(absNum % 10 < 5) ? absNum % 10 : 5]];
	
			if (insert === true) result = `${num} ${result}`;
	
			return result;
		} catch (e) {
			console.error(`decliner.js error: ${e.name} - ${e.message}`);
		}
	}
})();