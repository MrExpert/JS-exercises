// let arr = [1, 5, 4, 3, 2];
// let k = 5;
// const result = [];
// while (k > 0) {
//   function flip(arr, k) {
//     console.log("this is begining: ", arr);
//     // 1-step: find the max number
//     let maxNum = Math.max(...arr);
//     // 2-step: find its index
//     let inDex = arr.indexOf(maxNum);
//     // 3-step: reverse the element 0 to that index
//     let reVerse = arr.slice(0, inDex + 1).reverse();
//     // 4-step: Join the array
//     let uniteBack = [...reVerse, ...arr.slice(inDex + 1)];
//     // 5-step: Flip the entire array
//     let flp = uniteBack.reverse();
//     // 6-step: take the last elment out to results
//     result.push(flp[flp.length - 1]);
//   }
//   arr.pop();
//   k--;
// } // while loop closes
// console.log("this is result: ", result);
// console.log(flip(arr, k));
// function pancakeSort(arr) {
//   // create a flip(arr,k)
//   // let k = 5;

//   // flip(0,i) i - is largest number index
//   function flip(arr, k) {
//     // it reverse k elements in the array
//     // create a sorted variable

//     //  1  4  2  5
//     // [4, 1, 5, 2]    sorted: [1, 2, 4, 5]
//     for (let i = 0; i < k; i++) {
//       let temp = 0;
//       if (arr[i] > arr[i + 1]) {
//         arr[i + 1] = temp;
//         arr[i] = arr[i + 1];
//         temp = arr[i];
//       } // if closes
//     } // for loop closes
//   } // flip func closes
//   //flip(arr,k);
//   // it should return sorted array
//   return result;
// }
//
/////////////////////////////////////////////////
//                  Solution                  //
//                                            //
function pancakeSort(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    maxIndex = findMaxIndexInPrefix(arr, i);
    flip(arr, maxIndex);
    flip(arr, i);
  }
  return arr;
}

function flip(arr, k) {
  let pivot = floor((k + 1) / 2);
  for (let i = 0; i < pivot; i++) {
    let tmp = arr[i];
    arr[i] = arr[k - i];
    arr[k - i] = tmp;
  }
}
let arr = [1, 5, 4, 3, 2];
k = 5;
function findMaxIndexInPrefix(arr, k) {
  let bigNum = 0;
  for (let i = 0; i < 5; i++) {
    console.log("this is arr[i]: " + arr[i]);
    if (arr[i] > arr[bigNum]) bigNum = arr[i];
  }
  return "this is bigNum: " + bigNum;
}
console.log(findMaxIndexInPrefix(arr, k));
