function reverse2(input) {
  let result
  for (let i = input.length - 1; i >= 0; i--) {
    if (typeof input === "string") {
      result += input[i]
    } else if (Array.isArray(input)) {
      result.push(input[i])
    }
  }
  return result
}

console.log(reverse("abcd"))
console.log(reverse(["a", "b", "c", "d"]))
console.log(reverse([1, 2, 3, 4, 5]))


function getNextLang(languages, current) {
  const index = languages.indexOf(current)
  if (index === languages.length - 1) {
    return languages[0]
  }
  const next = languages[index + 1]
  return next
}

console.log(getNextLang(["ru", "en", "fr"], "fr"))
console.log(getNextLang(["ru", "en", "fr"], "ru"))
console.log(getNextLang(["ru", "en", "fr"], "en"))
console.log(getNextLang(["ru", "en"], "en"))


function sumArray(arr) {
  if (arr.length === 0) return 0
  const sum = arr.reduce((acc, item) => {
    return (acc += item)
  }, 0)
  return sum
}

console.log(sumArray([1, 2, 5]))
console.log(sumArray([10, -2, 5]))
console.log(sumArray([42]))
console.log(sumArray([]))

function getAgeRange(people) {
  const ages = people.map((person) => person.age)
  const maxAge = Math.max(...ages)
  const minAge = Math.min(...ages)
  const diff = maxAge - minAge
  return [maxAge, minAge, diff]
}

console.log(
  getAgeRange([
    { name: "a", age: 20 },
    { name: "b", age: 40 },
    { name: "c", age: 60 },
    { name: "d", age: 10 },
  ]),
)
console.log(
  getAgeRange([
    { name: "x", age: 5 },
    { name: "y", age: 5 },
  ]),
)
console.log(getAgeRange([{ name: "p", age: 100 }]))
console.log(
  getAgeRange([
    { name: "m", age: 30 },
    { name: "n", age: 20 },
    { name: "o", age: 25 },
  ]),
)

function findMax(arr) {
  const max = Math.max(...arr)
  return max
}

console.log(findMax([1, 2, 5]))
console.log(findMax([10, -5, 3, 8]))
console.log(findMax([-1, -2, -5]))
console.log(findMax([10]))


function findAverage(arr) {
  if (arr.length === 0) return 0
  const sum = arr.reduce((acc, item) => {
    return (acc += item)
  }, 0)
  const average = sum / arr.length
  return average
}

console.log(findAverage([1, 2, 3, 4]))
console.log(findAverage([10, 20, 30]))
console.log(findAverage([5]))
console.log(findAverage([]))