const pairwithgivendiff = (arr, diff) => {
  if (!Array.isArray(arr)) {
    throw "Invalid input";
  }

  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (Math.abs(arr[i] - arr[j]) == diff) {
        return 1;
      }
    }
  }
  return 0;
};

try {
  let input1 = [5, 10, 3, 2, 50, 80];
  let diff1 = 78;
  let output1 = pairwithgivendiff(input1, diff1);
  console.log(output1);

  let input2 = [-10, 20];
  let diff2 = 30;
  let output2 = pairwithgivendiff(input2, diff2);
  console.log(output2);
} catch (e) {
  console.error(e);
}
