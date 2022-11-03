let even = 0
let odd = 0
let from = 1

function theSumOf(from, to) {
  while (from <= to) {
    if (from % 2 === 0) {
      even += from;
    } else {
      odd += from;
    }
    from++
  }
}
console.log(theSumOf(0, 50))
console.log('The sum of all even numbers from 0 to 50 is ' + even + '.')
console.log('The sum of all odd numbers from 0 to 50 is ' + odd + '.')