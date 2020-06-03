function findArrayQuadruplet(arr, s) {
  if (arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
          for (let n = 0; n < arr.length; n++) {
            if (
              arr[i] + arr[j] + arr[k] + arr[n] === s &&
              i < j &&
              j < k &&
              k < n
            ) {
              return [arr[i], arr[j], arr[k], arr[n]];
            }
          }
        }
      }
    }

    //return [0, 4, 7, 9]
  } else {
    return [];
  }
}
const arr = [2, 7, 4, 0, 9, 5, 1, 3];
const s = 20;

console.log(findArrayQuadruplet(arr, s));
