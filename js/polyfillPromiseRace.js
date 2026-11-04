const myPromiserace2 = (arr) => {
  return new Promise((resolve, reject) => {
    arr.forEach((elem) => {
      Promise.resolve(elem).then(
        (value) => {
          resolve(value)
        },
        (error) => {
          reject(error)
        },
      )
    })
  })
}

myPromiserace2([first2, second2, third2])
  .then((result) => [console.log("result", result)])
  .catch((error) => {
    console.log("error", error)
  })