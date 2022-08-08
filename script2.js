// Function printPattern() is used to print a pattern for a given range using nested for loop.

function printPatter(num) {
  for(let i = 1 ; i <= num ; i++){
    let char = "";
    for (let j=1; j<=i; j++){
      char += j + " ";
    }
    console.log(char);
  }
}

printPatter(8);

/* 1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 */

// Function digitCount() to returns the number of digits in a given number .
// function digitCount(num){
//   let str = num.toString();
//   let counter = str.length;
//   let number = Number(counter)
//   return number

// }

// console.log(digitCount(8367)); //4
// console.log(digitCount(563349)); //6

// Function digitSum() to returns sum of all digits in a given number. Learn more about JavaScript built-in Math methods from

function digitSum(num){
  let str = num.toString();
  let arr = str.split("");
  let sum = 0;
  for(let i = 0 ; i < arr.length; i++){
    let char = arr[i];
    let number = Number(char);
    sum += number
    
  }
  return sum
}

console.log(digitSum(4367)); //20
console.log(digitSum(56349)); //27