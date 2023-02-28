const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 

  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 100000;
    actual = sum(50000,50000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -8;
    actual = sum(-5, -3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 5;
    actual = sum(5,0);
    expect(actual).toBe(expected);
  });

  test('can deal with no input number', () => {
    expected = NaN;
    actual = sum();
    expect(actual).toBeNaN();
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () =>{
    expected = 2; 
    actual = subtract(6,4);
    expect(actual).toBe(expected);
  })

  test('can subtract two large positive numbers', () =>{
    expected = 1000; 
    actual = subtract(22000,21000);
    expect(actual).toBe(expected);
  })

  test('can subtract two negative numbers', () =>{
    expected = 0; 
    actual = subtract(-2,-2);
    expect(actual).toBe(expected);
  })

  test('can subtract zero', () =>{
    expected = 11; 
    actual = subtract(11,0);
    expect(actual).toBe(expected);
  })

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () =>{
    expected = 72; 
    actual = multiply(8,9);
    expect(actual).toBe(expected);
  })

  test('can multiply two large positive numbers', () =>{
    expected = 9999000; 
    actual = multiply(1000, 9999);
    expect(actual).toBe(expected);
  })

  test('can multiply two negative numbers', () =>{
    expected = 27; 
    actual = multiply(-3,-9);
    expect(actual).toBe(expected);
  })

  test('can multiply a negative and a positive number', () =>{
    expected = -27; 
    actual = multiply(3,-9);
    expect(actual).toBe(expected);
  })
  
  test('can multiply by zero', () =>{
    expected = 0; 
    actual = multiply(123,0);
    expect(actual).toBe(expected);
  })

});

describe('divide', () => {

  test('can divide two small positive numbers', () =>{
    expected = 1.6; 
    actual = divide(8,5);
    expect(actual).toBe(expected);
  })

  test('can divide two large positive numbers', () =>{
    expected = 6.12; 
    actual = divide(52417, 8562);
    expect(actual).toBe(expected);
  })

  test('can divide two negative numbers', () =>{
    expected = 3; 
    actual = divide(-9,-3);
    expect(actual).toBe(expected);
  })

  test('can divide a negative and a positive number', () =>{
    expected = -0.33; 
    actual = divide(3,-9);
    expect(actual).toBe(expected);
  })
  
  test('can divide by zero', () =>{
    expected = Infinity; 
    actual = divide(123,0);
    expect(actual).toBe(expected);
  })

});

describe('modulus', () => {
  test('can find modulo of two small positive numbers', () =>{
    expected = 3; 
    actual = modulus(13,5);
    expect(actual).toBe(expected);
  })

  test('can find modulo of two large positive numbers', () =>{
    expected = 7409; 
    actual = modulus(56789, 12345);
    expect(actual).toBe(expected);
  })

  test('can find modulo of two negative numbers', () =>{
    expected = -0; 
    actual = modulus(-4,-2);
    expect(actual).toBe(expected);
  })

});

describe('even', () => {
  test('can find even number as true', () =>{
    expected = true; 
    actual = even(22);
    expect(actual).toBe(expected);
  })

  test('can find not even number as false', () =>{
    expected = false; 
    actual = even(41);
    expect(actual).toBe(expected);
  })

  test('the number is not even', () =>{
    notEven = true; 
    actual = even(41);
    expect(actual).not.toBe(notEven);
  })

  test('can find zero', () =>{
    expected = true; 
    actual = even(0);
    expect(actual).toBe(expected);
  })

 

});

describe('odd', () => {
  test('can find odd', () =>{
    expected = true; 
    actual = odd(1111111111);
    expect(actual).toBe(expected);
  })

  test('can find not odd', () =>{
    expected = false; 
    actual = odd(246864);
    expect(actual).toBe(expected);
  })

  test('can find 0', () =>{
    expected = false; 
    actual = odd(0);
    expect(actual).toBe(expected);
  })

});
