function myFilter(array, callback) {
  const newArr = []

  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      const isMatch = callback(array[i], i, array)
      if (isMatch) {
        newArr.push(array[i])
      }
    }
  }
  return newArr
}

console.log(myFilter([2, 5, 8, 12, 45, 3, 22], (num) => num > 10))

Array.prototype.myFilter = function (callback, thisArg) {
  const newArr = []

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      const current = this[i]
      const isMatch = callback.call(thisArg, current, i, this)
      if (isMatch) {
        newArr.push(current)
      }
    }
  }
  return newArr
}

const nums = [2, 5, 8, 12, 45, 3, 22]

const condition = {
  maxPrice: 10,
}

const filterNum = nums.myFilter(function (num) {
  return num < this.maxPrice
}, condition)

console.log(filterNum)
