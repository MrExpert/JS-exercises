function findDiff() {

    let arr = [3, 1, 2, 4, 3];
    let sum = arr.reduce((a, b) => a + b);
    let diff = sum - 3;
    let currentDiff;

    let result = arr.reduce((accu, value) => {

        currentDiff = Math.abs(sum - accu); // 1st round: sum=13 accu =3; 2nd: sum:13 accu=4
        console.log(currentDiff);// 1st round: currentDiff=10; 2nd: 9
        if (diff > currentDiff) diff = currentDiff; // 1st round flase; 2nd: diff=9
        // console.log(diff);
        accu = accu + value; // 1st: accu = 4; 2nd: accu=6
        // console.log('this is a: ' + a);
        return diff; //?
    });
    return result;
}
console.log(findDiff()); 