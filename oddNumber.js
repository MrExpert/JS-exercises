let A = [1, 2, 3, 3, 5, 5, 5];
let arrOdd = [];
function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 1) arrOdd.push(A[i]);
  }
  console.log(arrOdd);
  let tempOdd = arrOdd[0];
  let counter = 1;
  for (let i = 0; i < arrOdd.length; i++) {
  if( arrOdd[i] == arrOdd[i+1])
  tempOdd = arrOdd[i];
  counter = counter + 1;

  var counts = {};
your_array.forEach(
    function(x) { 
        counts[x] = (counts[x] || 0)+1; 
    });

}
console.log(findOdd(A));
