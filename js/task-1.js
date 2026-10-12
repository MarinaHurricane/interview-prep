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
