const checkArray = array => {
  if (!Array.isArray(array)) {
    throw new Error('The first constructor argument should be an array');
  }
  
  if (array.length !== 3) {
    throw new Error('Array must have 3 elements');
  }
  
  array.forEach(string => {
    if (typeof string !== 'string') throw new Error('Array must have only strings');
  });
}

const checkOptions = options => {
  if (options === null || typeof options !== "object" || Object.getPrototypeOf(options) !== Object.prototype) {
    throw new Error('Options must be an object');
  }
}

class Decliner {
  #options;
  #cases;

  constructor(array, options = {}) {
    checkArray(array);
    checkOptions(options);

    this.array = array;
    this.#options = options;

    this.#cases = [2, 0, 1, 1, 1, 2];
  }

  setOptions(options) {
    this.#options = {
      ...this.#options,
      ...options
    };
  
    return this;
  }

  decline(num) {
    if (typeof num !== 'number') throw new Error('Decline argument must be a number');
  
    const absoluteNum = Math.abs(num);
    let result = '';

    result = this.array[(absoluteNum % 1 !== 0) ? 1 : (absoluteNum % 100 > 4 && absoluteNum % 100 < 20) ? 2 : this.#cases[(absoluteNum % 10 < 5) ? absoluteNum % 10 : 5]];

    if (this.#options.format) {
      result = this.#options.format.replaceAll('{{value}}', result).replaceAll('{{num}}', num);
    }

    return result;
  }
}

export default Decliner;