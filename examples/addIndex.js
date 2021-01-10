const R = require('../dist/ramda')

const mapIndex = R.addIndex(R.map)

const value = mapIndex((value, index) => `${index} - ${value}`, ['c', 'u', 'v', 'e', 'e'])

console.log(value)

R.map((a, b, c, d) => {
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
}, ['my', 'name', 'is', 'cuvee'])