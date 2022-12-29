function filter_list(l) {
  // Return a new array with the strings filtered out
  let number = l.filter((item) => typeof item === 'number')
  return number
}
