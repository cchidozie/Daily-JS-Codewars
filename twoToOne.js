function longest(s1, s2) {
  //Convert string to array
  let newArray = s1 + s2.split('')

  //Get unique values
  let unique = newArray.filter((item, i, ar) => ar.indexOf(item) === i)

  //return to string
  let newString = unique.join('').toString()

  //Arrange alphabetically
  let sorted = newString.split('').sort().join('')

  return sorted
}

longest('effggghorncmh', 'aaaoritjaabcd')
