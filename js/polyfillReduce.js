Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function!")
  }

  let accumulator
  const length = this.length
  let startIndex = 0

  if (arguments.length > 1) {
    accumulator = initialValue
  } else {
    while (startIndex < length && !(startIndex in this)) {
      startIndex++
    }

    if (startIndex >= length) {
      throw new TypeError("Reduce of empty array with no initial value!")
    }

    accumulator = this[startIndex]
    startIndex++
  }

  for (let i = startIndex; i < length; i++) {
    if (i in this) {
      const current = this[i]
      accumulator = callback(accumulator, current, i, this)
    }
  }
  return accumulator
}

const objects = [
  { id: "1", name: "Alex", age: "22" },
  { id: "2", name: "Helen", age: "24" },
  { id: "3", name: "Josh", age: "35" },
  { id: "4", name: "Andrew", age: "31" },
]

const result11 = nums.myReduce((acc, num) => {
  return acc + num
}, 0)

console.log(result11)
const result12 = objects.myReduce((acc, obj) => {
  acc.push(obj.name)
  return acc
}, [])

console.log(result12)

Array.prototype.myReduce1 = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function!")
  }

  const length = this.length
  let accumulator
  const startIndex = 0

  if (arguments.length > 1) {
    accumulator = initialValue
  } else {
    while (startIndex < length && !(startIndex in this)) {
      startIndex++
    }
    if (startIndex >= length) {
      throw new TypeErroe("Reduce of empty array with no initial value!")
    }
    accumulator = this[startIndex]
    startIndex++
  }
  for (let i = 0; i < length; i++) {
    const current = this[i]
    accumulator = callback(accumulator, current, i, this)
  }
  return accumulator
}

Array.prototype.myReduce2 = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function!")
  }

  const length = this.length
  let accumulator
  const startIndex = 0

  if (arguments.length > 1) {
    accumulator = initialValue
  } else {
    while (startIndex < length && !(startIndex in this)) {
      startIndex++
    }
    if (startIndex >= length) {
      throw new TypeError("Reduce of empty array with no initial value!")
    }
    initialValue = this[startIndex]
    startIndex++
  }
  for (let i = 0; i < length; i++) {
    const current = this[i]
    accumulator = callback(accumulator, current, i, this)
  }
  return accumulator
}

console.log(result11)
const result13 = objects.myReduce((acc, obj) => {
  acc.push(obj.name)
  return acc
}, [])

console.log("result", result13)

Array.prototype.myReduce3 = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function!")
  }

  const length = this.length
  let accumulator
  const startIndex = 0

  if (arguments.length > 1) {
    accumulator = initialValue
  } else {
    while (startIndex < length && !(startIndex in this)) {
      startIndex++
    }
    accumulator = this[startIndex]
    startIndex++
  }
  for (let i = 0; i < length; i++) {
    const current = this[i]
    accumulator = callback(accumulator, current, i, this)
  }
  return accumulator
}

console.log(result11)
const result14 = objects.myReduce((acc, obj) => {
  acc.push(obj.name)
  return acc
}, [])

console.log("result", result14)