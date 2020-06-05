/// https://typeofnan.dev/a-more-idiomatic-two-sum-solution/
function TwoSum() {
    const arr = [4, 6, 10, 15, 16]
    const limit = 21;
    let sum = arr.reduce((a, b) => {
        ((a + b) === limit) ? [a, b] : 0
    }, 0)
    console.log('this is sum: ', sum);
}
console.log(TwoSum());
// //// obj version

// let obj = {};
// let arr = [2, 4, 5, 6, 10];
// let limit = 15;

// for (let i = 0; i < 5; i++) {

//     //let currentNum = arr[i];

//     //console.log(currentNum);

//     obj[i] = arr[i];

//     console.log(obj);

//     let otherNum = limit - obj[i];
//     // console.log(Object.values(obj).includes(otherNum));

//     if (Object.values(obj).includes(otherNum)) {
//         console.log(i, Object.values(obj).indexOf(otherNum));
//     }

// }

/// another example'


// let obj = {};
// let arr = [2, 4, 5, 6, 10];
// let limit = 15;
// let result = []

// for (let i = 0; i < 5; i++) {

//     obj[i] = arr[i];

//     console.log(obj);

//     let otherNum = limit - obj[i];

//     if (Object.values(obj).includes(otherNum)) {
//         result = [arr[i], otherNum];
//     }

// }
// console.log(result);

// console logs :
// Object {
//   0: 2,
//   1: 4,
//   2: 5,
//   3: 6,
//   4: 10
// }
// [10, 5]