
function average(numbers) {
  //filtering NaN
  numbers = numbers.filter(x => !Number.isNaN(x))
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}

module.exports = {average};
