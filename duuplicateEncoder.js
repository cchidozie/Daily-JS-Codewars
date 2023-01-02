function duplicateEncode(word) {
  let outcome = ''
  word = word.toLowerCase()
  for (let i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) !== word.indexOf(word[i])) {
      outcome += ')'
    } else {
      outcome += '('
    }
  }
  return outcome
}

duplicateEncode('did')
