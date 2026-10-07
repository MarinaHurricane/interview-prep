const findMaxSum1 = (arr) => {
  let left = 0;
  let middle = 1;
  let right = 2;

  let sum = arr[left] + arr[middle] + arr[right];
    let maxSum = sum;

  for (let i = 1; i < arr.length - 2; i++) {
    let newSum = sum - arr[i - 1] + arr[i + 2];
    console.log(newSum)

    if (newSum > maxSum) {
      maxSum = newSum
    }

    sum = newSum
  }
  return maxSum
}

console.log(findMaxSum1([2, 1, 5, 1, 3, 2]))