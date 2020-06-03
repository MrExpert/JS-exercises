let N = 321;
function solution(N) {
    let str = N.toString(2),
        zeroCount = 0,
        times = 0,
        result = 0,
        obj = {};

    for (let digit of str) {
        if (digit === '0') {
            console.log('this');
            zeroCount += 1;
        } else /* if ( digit === '1' ) */ {
            result = Math.max(result, zeroCount);
            obj[i] = zeroCount;
            zeroCount = 0;
            times++;
            console.log('obj');
        }
    }

    return result;
}
console.log(solution(N));
console.log(obj);