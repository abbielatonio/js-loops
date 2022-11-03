let even = 0
let odd = 0

function theSumOf(from, to) {
  for (let i = from; i <= to; i++) {
    if (i % 2 === 0) {
      even += i;
    } else {
      odd += i;
    }
  }
}

console.log(theSumOf(0, 50))
console.log('The sum of all even numbers from 0 to 50 is ' + even + '.')
console.log('The sum of all odd numbers from 0 to 50 is ' + odd + '.')