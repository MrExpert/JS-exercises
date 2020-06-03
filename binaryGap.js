// let arr = (321).toString(2).split('').map(Number);

// function binaryGap(arr) {
//     let obj = {};
//     let newArr = [];
//     let counter = 0;
//     let maxCount = 0;
//     //
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === 1 && arr[i + 1] === 0) {
//             console.log('1-0');
//             counter++;

//             // console.log(counter);
//             // if (obj[arr[i]]) {
//             //     obj[arr[i]] = counter;
//             // } else {
//             //     obj[arr[i]] = 0;
//             // }
//         } else if (arr[i] === 0 && arr[i + 1] === 0) {
//             console.log('0-0');
//             counter++;
//         } else if (arr[i] === 0 && arr[i + 1] === 1) {
//             console.log('0-1');
//             maxCount = counter;
//             counter = 0;

//         } else if (arr[i] === 1 && arr[i + 1] === 1) {
//             console.log('1-1');

//         }
//     }
//     console.log(counter);
// }
// binaryGap(arr);
let N = 341;
function solution(N) {
    let str = N.toString(2),
        zeroCount = 0,
        result = 0;
    console.log(str);
    for (let digit of str) {

        if (digit === '0') {
            zeroCount += 1;
        } else /* if ( digit === '1' ) */ {
            result = Math.max(result, zeroCount);
            zeroCount = 0;

            // console.log('this is : ', result);

        }
    }
    return result;
}
console.log(solution(N));
