function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest
  let sorted = array.sort(function (a, b) {
    return a.length - b.length
  })
  return sorted
}

sortByLength(['I', 'Beg', 'jjjjjjjj', 'Life'])