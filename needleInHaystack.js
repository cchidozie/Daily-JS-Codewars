function findNeedle(haystack) {
  let neddleIndex = haystack.findIndex((index) => index === 'needle')
  return `found the needle at position ${neddleIndex}`
}
