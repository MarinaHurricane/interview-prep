const myPromiseAny2 = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) {
      reject(new AggregateError([], "Empty array"))
      return
    }

    const errors = []
    let rejectedCount = 0

    arr.forEach((elem, index) => {
      Promise.resolve(elem).then(
        (value) => {
          resolve(value)
        },
        (error) => {
          errors[index] = error
          rejectedCount++

          if (rejectedCount === arr.length) {
            reject(new AggregateError(errors, "All promises were rejected"))
          }
        },
      )
    })
  })
}

const tests1 = [
  [],
  [Promise.resolve('A')],
  [Promise.reject('A'), Promise.resolve('B')],
  [Promise.reject('A'), Promise.reject('B')],
  [10, Promise.reject('Failed')]
]


tests1.forEach((elem, index) => {
  myPromiseAny2(elem).then(result => {
    console.log(`Test ${index + 1}:`, result)
  })
  .catch(error => {
    console.log(`Test ${index + 1}:`, error instanceof AggregateError ? error.errors : error)
  })
})
