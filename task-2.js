let x = ''
let i = 0

function test(x) {
 while (i <= 10) {
   x += i
   x += i % 1 ? ' ' : '\n'
   i++
 }
 return(x)
}

console.log(test(x))