let arr = [3, 1, 2, 4, 3]

function tapeEquilibrium(arr) {
    let leftSum = arr[0];
    let rightSum = 0;
    let diff = 0;

    // getting total Sum and assigning it to rightSum
    arr.forEach(element => {
        rightSum += element;
    });

    // diff = arr.reduce((a,b) => {
    // currentDiff = sum - a;

    // })



    // getting the first difference
    rightSum -= leftSum;
    diff = Math.abs(leftSum - rightSum);
    // console.log('this is diff1: ' + diff);s

    // lets loop thru and get all differences now
    for (let i = 0; i < arr.length; i++) {
        leftSum += arr[i];
        rightSum -= arr[i];
        let currentDiff = Math.abs(leftSum - rightSum);
        // comparing and assigning diff to the minimum
        diff = Math.min(diff, currentDiff);
    }
    // console.log('this is diff2: ' + diff);
    return diff;


}

console.log(tapeEquilibrium(arr));
