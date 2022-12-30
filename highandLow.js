function highAndLow(numbers) {
  // ...
  let newArray = numbers.split(' ')
  let sortednumbers = newArray.sort((a, b) => a - b)
  return `${sortednumbers[sortednumbers.length - 1]} ${sortednumbers[0]}`
}
