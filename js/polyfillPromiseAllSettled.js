
myPromiseAllSettled([first1, second1, third1])
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })

const tests = [
  [],
  [Promise.resolve(100)],
  [Promise.reject("Failed")],
  [10, "Hello", Promise.resolve(30)],
]

tests.forEach((elem, index) => {
  myPromiseAllSettled(elem).then((result) => {
    console.log(`Test ${index + 1}:`, result)
  })
})