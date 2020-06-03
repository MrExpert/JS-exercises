/*
https://www.linkedin.com/in/brandon-lim/
https://medium.com/@martin.crabtree/javascript-tracking-key-value-pairs-using-hashmaps-7de6df598257

Brandon
Sam


key -> value

17 -> 0
complement -> idx
17 -result; 0-index
dict = {17 -> 0, 15 -> 1, 11 -> 2}
arr = [4, 6, 10, 15, 16],  lim = 21

21 - 4 = 17
21 - arr[1] = 21 - 6 = 15
hello? can you hear me
I can't hear you anymore
I'm going to leave, but as said add me on LinkedIn and get more comfortable with hashmaps / dictionaries
Also sets are really useful too
Ok I'm going to leave
linkedin link?
https://www.linkedin.com/in/brandon-lim/
cool talk to you  soon

Same, good luck with everything
, stay safe
great talking to you will 
21 - arr[idx (the value)] = key

[15, 1]
*/
function getIndicesOfItemWeights(arr, limit) {
    // retuns an array of 2 elements that sum to limit
    //console.log(arr.reduce((accu, val)=> (accu + val)===limit ? ));
    let obj = {};

    for (let i = 0; i < arr.length; i++) {

        let num2 = limit - arr[i];
        console.log(num2);
        obj[num2] = i;
        console.log(obj);

        if (arr[i] in obj) {
            return [i, obj[arr[i]]]
        }

    }
}
const arr = [4, 6, 10, 15]
const limit = 21;
console.log(getIndicesOfItemWeights(arr, limit));


// let curr_weight = arr[i];
// if (curr_weight in obj) {
//     return [i, obj[curr_weight]]
// }
// let num2 = limit - curr_weight;
// console.log(num2);
// obj[num2] = i;