
function fizzBuzzRange(max) {
  const array = []
  for (let count = 1; count <= max; count = count + 1) {
    let isFizBuzz = ""
    if (isDivisibleByThree(count)) {
      isFizBuzz = "Fizz"
    }
    if (isDivisibleByFive(count)) {
      isFizBuzz = isFizBuzz + "Buzz"
    }
    if (isFizBuzz) {
      array.push(isFizBuzz)
    } else {
      array.push(count)
    }

  }

  return array;
}

function isDivisibleByThree(num) {
  return (num % 3) === 0
}

function isDivisibleByFive(num) {
  return (num % 5) === 0
}


module.exports.fizzBuzzRange = fizzBuzzRange;
