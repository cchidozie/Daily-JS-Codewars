function findDifference(a, b) {
  //loading...
  const sumA = a.reduce((a, b) => a * b)
  const sumB = b.reduce((a, b) => a * b)
  console.log(Math.abs(sumA - sumB))
}

findDifference([2, 2, 3], [5, 4, 1])
