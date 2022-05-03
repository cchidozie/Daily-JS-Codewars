//Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

function areYouPlayingBanjo(name) {
  // Implement me
  let firstLetter = name.slice(0, 1)

  firstLetter === 'r' || firstLetter === 'R'
    ? console.log(`${name} plays banjo`)
    : console.log(`${name} does not play banjo`)
  //condition ? exprIfTrue : exprIfFalse
}

areYouPlayingBanjo('Rmimi')
