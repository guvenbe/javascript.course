//const add = require('./../../src/math')
import add from './../../src/math'


test('Can add numbers', () =>{
    //given
    const number1 = 1;
    const number2 = 1;
    const expected = 2;

    //when
    const actual = add(number1, number2);
    
    //then
    expect(actual).toBe(expected)
})