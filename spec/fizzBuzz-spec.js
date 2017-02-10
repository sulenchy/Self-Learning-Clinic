//Linking fizzBuzz Module to fizzBuzz-spec test
var fizzBuzz = require("../fizzBuzz");

//function that enclosed test cases
describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
  	var response = fizzBuzz.Make_Sound(3);
    expect(response).toEqual('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    var response = fizzBuzz.Make_Sound(5);
    expect(response).toEqual('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    var response = fizzBuzz.Make_Sound(15);
    expect(response).toEqual('FizzBuzz');
  });
  it("should return `FizzBuzz` for 45", function() {
    var response = fizzBuzz.Make_Sound(45);
    expect(response).toEqual('FizzBuzz');
    
  });

  it("should return `FizzBuzz` for 90", function() {
    var response = fizzBuzz.Make_Sound(90);
    expect(response).toEqual('FizzBuzz');
  });

   it("should return `FizzBuzz` for 120", function() {
    var response = fizzBuzz.Make_Sound(120);
    expect(response).toEqual('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
  	var response = fizzBuzz.Make_Sound(63);
    expect(response).toEqual('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
  	var response = fizzBuzz.Make_Sound(7);
    expect(response).toEqual(7);
    
  });

  it("should return 11 since its indivisible by 3 and 5", function() {
  	var response = fizzBuzz.Make_Sound(11);
    expect(response).toEqual(11);
    
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
  	var response = fizzBuzz.Make_Sound(101);
    expect(response).toEqual(101);
  });
   
  

});