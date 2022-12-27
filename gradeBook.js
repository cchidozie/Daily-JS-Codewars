function getGrade(s1, s2, s3) {
  // Code here
  let score = (s1 + s2 + s3) / 3
  console.log(score)

  if (score >= 90) console.log('A')
  else if (score >= 80) console.log('B')
  else if (score >= 70) console.log('C')
  else if (score >= 60) console.log('D')
  else console.log('E')
}

getGrade(100, 60, 0)
