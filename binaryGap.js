
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
