const besttimetobuyll = (arr) => {
  if (!Array.isArray(arr)) {
    throw "Invalid input";
  }

  let buy = arr[0];
  let maxprofit = 0;
  let profit = 0;

  for (let i = 1; i < arr.length; i++) {
    if (buy > arr[i]) {
      buy = arr[i];
    } else {
      profit = arr[i] - buy;
      if (profit > maxprofit) {
        maxprofit = profit;
      }
    }
  }

  return maxprofit;
};

try {
  let input1 = [7, 1, 5, 3, 6, 4];
  let output1 = besttimetobuyll(input1);
  console.log(output1);
} catch (e) {
  console.error(e);
}
