function longest(s1, s2) {
  // your code
  let string = s1 + s2

  //Convert string to array
  let newArray = string.split('')

  //Get unique values
  let unique = newArray.filter((item, i, ar) => ar.indexOf(item) === i)

  //return to string
  let newString = unique.join('').toString()

  //Arrange alphabetically
  let sorted = newString.split('').sort().join('')

  return sorted
}

longest('effggghorncmh', 'aaaoritjaabcd')
