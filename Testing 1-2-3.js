var number = function (array) {
  //your awesome code here
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(`${i + 1} : ${array[i]}`)
  }

  return newArray
}

number(['a', 'b', 'c', 'd', 'e', 'f'])