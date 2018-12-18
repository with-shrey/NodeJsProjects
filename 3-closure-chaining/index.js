const Summation = require('./Summation')

const lib = new Summation(1)
lib.add(10).sub(20).mul(2).div(1)

console.log("Output :"+ lib.number);