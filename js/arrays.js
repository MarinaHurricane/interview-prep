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

function replaceItems(arr, item, replaceItem) {
  const result = arr.map((arrItem) =>
    arrItem === item ? replaceItem : arrItem,
  )
  return result
}

console.log(replaceItems([1, 2, 3, 4, 2], 2, "a")) // [1, 'a', 3, 4, 'a']
console.log(replaceItems(["apple", "banana", "apple"], "apple", "orange")) // ['orange', 'banana', 'orange']
console.log(replaceItems([true, false, true], true, 1)) // [1, false, 1]
console.log(replaceItems([], 5, 10)) // []

function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray);
    if (newArray.length > maxLength) {
        return newArray.slice(0, maxLength);
    } else {
        return newArray;
    }
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

function filterArray(numbers, value) {
    const arrayBiggerValue = [];
    for (const number of numbers) {
        if (number > value) {
            arrayBiggerValue.push(number);
        }
    }
    return arrayBiggerValue;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]