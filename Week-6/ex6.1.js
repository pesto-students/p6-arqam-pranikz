const maxsumcontiguous = (arr) => {
  if (!Array.isArray(arr)) {
    throw "Invalid input";
  }

  let n = arr.length;
  let globalMaxSum = arr[0];
  let currentMaxSum = arr[0];

  for (let i = 1; i < n; i++) {
    currentMaxSum = Math.max(arr[i], currentMaxSum + arr[i]);
    if (currentMaxSum > globalMaxSum) {
      globalMaxSum = currentMaxSum;
    }
  }

  return globalMaxSum;
};

try {
  let input1 = [1, 2, 3, 4, -10];
  let output1 = maxsumcontiguous(input1);
  console.log(output1);

  let input2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  let output2 = maxsumcontiguous(input2);
  console.log(output2);
} catch (e) {
  console.error(e);
}
