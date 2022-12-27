function getGrade(s1, s2, s3) {
  // Code here
  let score = (s1 + s2 + s3) / 3
  console.log(score)

  switch (true) {
    case (score >= 90) :
      // return 'A'
      console.log('A')
      break
    case (score <= 80) :
      console.log('B')
      // return 'B'
      break
    case (score >= 70):
      console.log('C')
      // return 'C'
      break
    case (score >= 60):
      console.log('D')
      // return 'D'
      break
    default:
      // code block
      console.log('E')
    // return 'E'
  }
}

getGrade(100, 90, 10)
