function strCount(str, letter) {
  let count = 0
  let strArr = [...str]

  strArr.forEach((str) => {
    if (str === letter) {
      count++
    }
  })
  console.log(count)
  return count
}

strCount('hello', 'l')
