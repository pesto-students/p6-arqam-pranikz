const threesum = (arr, target) => {
  if (!Array.isArray(arr)) {
    throw "Invalid input";
  }

  let n = arr.length;
  let closestvalue = Infinity;
  let closestsum = 0;

  for (let i = 0; i < n - 2; i++) {
    let sum = arr[i] + arr[i + 1] + arr[i + 2];
    let value = Math.abs(sum - target);

    if (value < closestvalue) {
      closestvalue = value;
      closestsum = sum;
    }
  }

  return closestsum;
};

try {
  let input1 = [-1, 2, 1, -4];
  let target = 1;
  let output1 = threesum(input1, target);
  console.log(output1);
} catch (e) {
  console.error(e);
}
