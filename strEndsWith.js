function solution(str, ending) {
  // TODO: complete
  let length = ending.length
  if (str.slice(-length) === ending || ending === '') {
    return true
  } else {
    return false
  }
}
