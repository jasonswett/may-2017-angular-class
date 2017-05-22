function addTwoNumbers(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Both arguments must be numbers');
  }

  return a + b;
}

describe('addTwoNumbers', function() {
  it('adds two numbers', function() {
    expect(addTwoNumbers(4, 5)).toEqual(9);
  });

  describe('first number is not a number', function() {
    it('throws an error', function() {
      expect(function() {
        addTwoNumbers('some string', 5);
      }).toThrow(new Error('Both arguments must be numbers'));
    });
  });

  describe('second number is not a number', function() {
    it('throws an error', function() {
      expect(function() {
        addTwoNumbers(4, 'some string');
      }).toThrow(new Error('Both arguments must be numbers'));
    });
  });
});
