import numberOfOccurence from './../../src/number-of-occurences'

test("can find number of occurences", () =>{
    //given
    const numArr = [1,2,2,2,5,6];
    //when
    const result = numberOfOccurence(numArr, 2);
    const expected =3
    //then
    expect(result).toBe(expected);
});

test("can find number of occurences of 0", () =>{
    //given
    const numArr = [1,2,2,2,5,6];
    //when
    const result = numberOfOccurence(numArr, 11);
    //then
    expect(result).toBe(0);
});

test("will throw input not a number", () =>{
    //given
    const num = "a"
    //when
    //then
    expect(() => numberOfOccurence([], num))
    .toThrow(`${num} is not a number`)
  

});

