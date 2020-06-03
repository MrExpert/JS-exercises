
const reverseSeq = n => [...Array(n)].map((v, i, arr) => n - i);
console.log(reverseSeq(5));
