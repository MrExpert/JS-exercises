function solve(a, b) {
  let result = [];
  let one = a.split("");
  let two = b.split("");

  for (let i = 0; i < one.length; i++) {
    for (let j = 0; j < two.length; j++) {
      if (one[i] === two[j]) {
        result.push(one[i]);
      }
    }
  }

  console.log("this is result: ", result);
}
