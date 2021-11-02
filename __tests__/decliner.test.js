import Decliner from '../dist/decliner.js';

describe('DeclinerJS', () => {
  let array = [];

  beforeEach(() => {
    array = ['апельсин', 'апельсина', 'апельсинов'];
  });

  describe('Nothing was passed to constructor', () => {
    it('should throw error', () => {
      const result = () => new Decliner();

      expect(result).toThrow('The first constructor argument should be an array');
    });
  });

  describe('Creating instance', () => {
    it('should throw error if array\'s length is not 3', () => {
      const cases = [
        () => new Decliner([]),
        () => new Decliner([array[0]]),
        () => new Decliner([array[0], array[1]]),
        () => new Decliner(array.concat('апельсины'))
      ];

      cases.forEach(result => {
        expect(result).toThrow('Array must have 3 elements');
      });
    });

    it('should throw error if array\'s items are not strings', () => {
      const result = () => new Decliner(['апельсин', 1, 'апельсинов']);
      
      expect(result).toThrow('Array must have only strings');
    });
    
    it('should throw error if options is not an object', () => {
      const result = () => new Decliner(array, []);
      
      expect(result).toThrow('Options must be an object');
    });

    it('should return new Decliner instance', () => {
      const result = new Decliner(array);

      expect(result).toBeInstanceOf(Decliner);
    });
  });

  describe('Decline method', () => {
    it('should throw error if argument is not a number', () => {
      const result = () => new Decliner(array).decline('1');

      expect(result).toThrow('Decline argument must be a number');
    });

    it('should return first array value if number is ending with 1 (except 11)', () => {
      const cases = [1, 21, 31, 41];

      cases.forEach(num => {
        expect(new Decliner(array).decline(num)).toBe(array[0]);
      });
    });

    it('should return second array value if number is ending with 2, 3, 4, 22, 23, 24 etc. (except 10th)', () => {
      const cases = [2,  3,  4,  24,  23,  24,  34,  34,  34];
      const decliner = new Decliner(array);

      cases.forEach(num => {
        expect(decliner.decline(num)).toBe(array[1]);
      });
    });

    it('should return last array value if number is ending with 5, 6, 7, 8, 9, 0 etc.', () => {
      const cases = [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 29, 30];
      const decliner = new Decliner(array);

      cases.forEach(num => {
        expect(decliner.decline(num)).toBe(array[2]);
      });
    });

    it('should return correct value for negative number', () => {
      const cases = [
        {result: new Decliner(array).decline(-1), expected: array[0]},
        {result: new Decliner(array).decline(-2), expected: array[1]},
        {result: new Decliner(array).decline(-5), expected: array[2]},
      ];

      cases.forEach(caseItem => {
        expect(caseItem.result).toBe(caseItem.expected);
      });
    });

    it('should return correct value for non-integer number', () => {
      const cases = [
        {result: new Decliner(array).decline(0.25), expected: array[1]},
        {result: new Decliner(array).decline(1.5), expected: array[1]},
        {result: new Decliner(array).decline(7.8), expected: array[1]},
        {result: new Decliner(array).decline(-0.25), expected: array[1]},
        {result: new Decliner(array).decline(-1.5), expected: array[1]},
        {result: new Decliner(array).decline(-7.8), expected: array[1]},
      ];

      cases.forEach(caseItem => {
        expect(caseItem.result).toBe(caseItem.expected);
      });
    });
  });

  describe('Defining options' , () => {
    it('should return formatted string if options.format is set', () => {
      const decliner = new Decliner(array, {format: '{{num}} {{value}}'});

      expect(decliner.decline(1)).toBe('1 ' + array[0]);
      expect(decliner.decline(3)).toBe('3 ' + array[1]);
      expect(decliner.decline(5)).toBe('5 ' + array[2]);
    });

    it('should return value with updated options.format', () => {
      const decliner = new Decliner(array, {format: '{{num}} {{value}}'});
      decliner.setOptions({format: '{{value}} {{num}}'});

      expect(decliner.decline(1)).toBe(array[0] + ' 1');
      expect(decliner.decline(3)).toBe(array[1] + ' 3');
      expect(decliner.decline(5)).toBe(array[2] + ' 5');
    });
  });
});