function findBusiestPeriod(data) {
  let sum = 0;
  let maxSum = 0;
  let maxTimeStamp;
  let i = 0;
  while (i < data.length) {
    const curEntry = data[i];
    const curTimeStamp = curEntry[0];
    let curDelta = 0;
    while (i < data.length && data[i][0] === curTimeStamp) {
      const change = data[i][2] === 1 ? data[i][1] : 0 - data[i][i];
      curDelta += change;
      i++;
    }
    sum += curDelta;
    if (sum > maxSum) {
      maxSum = sum;
      maxTimeStamp = curTimeStamp;
    }
  }
  return maxTimeStamp;
}
data = [
  [1487799425, 14, 1],
  [1487799425, 4, 0],
  [1487799425, 2, 0],
  [1487800378, 10, 1],
  [1487801478, 18, 0],
  [1487801478, 18, 1],
  [1487901013, 1, 0],
  [1487901211, 7, 1],
  [1487901211, 7, 0],
];

console.log(findBusiestPeriod(data));
