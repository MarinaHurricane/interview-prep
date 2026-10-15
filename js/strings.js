function stringSandwich(a, b) {
  if (a.length < b.length) {
    return a + b + a
  } else if (b.length < a.length) {
    return b + a + b
  } else if (a.length === a.length) {
    return a + b
  } else if (a.length === 0) {
    return b
  }
}

console.log(stringSandwich("1", "22"))
console.log(stringSandwich("22", "1"))
console.log(stringSandwich("abc", "def"))
console.log(stringSandwich("", "def"))

function getCompressedString(str) {
  const newArr = str.toLowerCase().split("")
  console.log(newArr)
  const result = newArr.reduce((acc, item) => {
    if (!acc[item]) {
      acc[item] = 1
    } else if (acc[item]) {
      acc[item]++
    }
    return acc
  }, {})

  const final = Object.entries(result)
  console.log(final)
  const finalResult = final.reduce((acc, item) => {
    return (acc += item[0] + item[1])
  }, "")

  return finalResult
}

console.log(getCompressedString("aaAaBbBbDFFFff"))