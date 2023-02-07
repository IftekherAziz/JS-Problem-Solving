// let sum = 0;
// for (var i = 1; i <=5; i++) {
//     sum += i;
// }
// console.log(sum);

// let sum = 0;
// for (let i =5; i >= 1; i--) {
//     sum += i;
// }
// console.log(sum);
/**
 * "The function sum() takes in a number, and returns the sum of all numbers from that number down to
 * 0."
 * 
 * The function sum() takes in a number, and returns the sum of all numbers from that number down to 0
 * @param i - 5
 */

function sum(i) {
  if (i == 1){
    return 1;
  }
  console.log(i);
  return i + sum(i - 1);
}
console.log(sum(5));

/* 
   5 + sum(4)
   5 + 4 + sum(3)
   5 + 4 + 3 + sum(2)
   5 + 4 + 3 + 2 + sum(1)
   5 + 4 + 3 + 2 + 1
*/
