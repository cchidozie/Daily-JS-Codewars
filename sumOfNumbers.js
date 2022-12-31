function printerError(s) {
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] > 'm') {
      count++
    }
  }
  console.log(`${count}/${s.length} `)
}

printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')
