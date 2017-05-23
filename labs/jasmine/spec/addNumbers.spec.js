function addSomeNumbers(input) {
  var numbers = input.replace('plus', '+').split('+');
  var total = 0;

  numbers.forEach(function(number) {
    total = total + parseInt(number);
  });

  return total;
}

describe('addSomeNumbers', function() {
  it('works with two numbers', function() {
    expect(addSomeNumbers('1 + 1')).toEqual(2);
  });

  it('works with three numbers', function() {
    expect(addSomeNumbers('5 + 2 + 8')).toEqual(15);
  });

  it('works with expressions without spaces', function() {
    expect(addSomeNumbers('3+4')).toEqual(7);
  });

  it('works with negative numbers', function() {
    expect(addSomeNumbers('7 + -2')).toEqual(5);
  });

  it('works with negative numbers without spaces', function() {
    expect(addSomeNumbers('7+-2')).toEqual(5);
  });

  it('works with single numbers', function() {
    expect(addSomeNumbers('-5')).toEqual(-5);
  });

  it('works with words', function() {
    expect(addSomeNumbers('1 plus 2')).toEqual(3);
  });
});
