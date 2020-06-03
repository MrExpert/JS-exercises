var fizzBuzzCustom = function (stringOne, stringTwo, numOne, numTwo) {
  for (let i = 1; i < 101; i++) {
    if (i % numOne === 0 && i % numTwo === 0) {
      stringOne + stringTwo;
    } else if (i % numOne === 0) {
      stringTwo;
    } else if (i % numTwo === 0) {
      stringTwo;
    } else {
      i;
    }
  }
};
console.log(fizzBuzzCustom("yes", "no", 2, 5));
