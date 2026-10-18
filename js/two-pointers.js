const hasPair = (arr, target) => {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === target) {
      return [true, arr[left], arr[right]]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return false
}

console.log(hasPair([1, 2, 5, 7, 8], 10))
console.log(hasPair([1, 3, 7, 8, 13], 16))
console.log(hasPair([3, 8, 9, 12, 16], 7))


const isPal = (str) => {
  let left = 0
  let right = str.length - 1

  while (left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

console.log(isPal("level"))
console.log(isPal("radar"))
console.log(isPal("hello"))

const twoPointers = (arr) => {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
  }
  return arr
}

console.log(twoPointers([1, 2, 3, 4, 5, 6, 7]))


const isPalindrome = (str) => {
  let left = 0
  let right = str.length - 1

  while (left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

console.log(isPalindrome("level"))

console.log(isPalindrome("hello"))

console.log(isPalindrome("radar"))