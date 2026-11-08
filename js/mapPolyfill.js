function myMap(array, callback) {
  const newArr = new Array(array.length)

  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      const result = callback(array[i], i, array)
      newArr[i] = result
    }
  }
  return newArr
}

function doubleNum(num) {
  return num * 2
}

console.log(myMap([1, 2, 3], doubleNum))

Array.prototype.myMap = function (callback) {
  const newArr = new Array(this.length)

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      const newElem = callback(this[i], i, this)
      newArr[i] = newElem
    }
  }
  return newArr
}

const array = [1, 3, 5]

console.log(array.myMap(doubleNum))

const calculator = {
  discount: 20,
}

Array.prototype.myMap1 = function (callback, thisArg) {
  const newArr = new Array(this.length)

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      const current = this[i]
      const newElem = callback.call(thisArg, current, i, this)
      newArr[i] = newElem
    }
  }

  return newArr
}

const newNum = array.myMap1(function (num, index, array) {
  return num - (1 * this.discount) / 100
}, calculator)

console.log(newNum)