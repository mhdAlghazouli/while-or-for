// Function printPattern() is used to print a pattern for a given range using nested for loop.

// function printPatter(num) {
//   for(let i = 1 ; i <= num ; i++){
//     let char = "";
//     for (let j=1; j<=i; j++){
//       char += j + " ";
//     }
//     console.log(char);
//   }
// }

// printPatter(8);

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

// function digitSum(num){
//   let str = num.toString();
//   let arr = str.split("");
//   let sum = 0;
//   for(let i = 0 ; i < arr.length; i++){
//     let char = arr[i];
//     let number = Number(char);
//     sum += number
    
//   }
//   return sum
// }

// console.log(digitSum(4367)); //20
// console.log(digitSum(56349)); //27





// Program to find the largest number in the given 1D array. 
// var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];

// let largest = null;

// let counter = 0;
// // for(let i = 0 ; i < arr.length; i++){
// //   if(largest === null || largest < arr[i]){
// //     largest = arr[i];
    
    
// //   }
// // }

// while(counter < arr.length){
//   if(largest === null || largest < arr[counter]){
//     largest = arr[counter];
//   };
//   counter ++
// };


// console.log(largest) //567







// Program to find count number for zeros in 2d matrix using nested for loops and increment operation.




// let arr = [[0,1,1],[0,1,0,0],[1,0,0,0]];

// let zero = 0;

// let counter = 0 ;
// for(let i = 0 ; i < arr.length; i++){
//   let char = arr[i];
//   for(let j = 0 ; j < char.length; j++){
//     if(char[j] === 0){
//       zero += 1;
//     };
//   };
// };

// while(counter < arr.length){
//   let counter2 = 0;
  
//   while(counter2 < arr[counter].length){
//     if(arr[counter][counter2] === 0){
//       zero++
//     }
//     counter2++
//   }
//   counter ++
// }



// console.log(zero) //5











// Function findProd() to generate a new array which is the product of two arrays of the same size using for loop.

// let arr1 = [3,45,23,78,34];
// let arr2 = [4,2,34,4,12,1];
// let arrMultiply = [];

// function findProd(arr1,arr2){
//   for(let i = 0 ; i < arr1.length; i++){
    
//       arrMultiply.push((arr1[i]*arr2[i]));
    
//   };

//   arrMultiply.push(arr2[arr2.length-1]);

//   return arrMultiply;
// };

// function findProd(arr1,arr2){
//   let counter = 0;
//   while(counter < arr1.length){
//     arrMultiply.push(arr1[counter]*arr2[counter]);
//     counter ++;
//   };
//   arrMultiply.push(arr2[arr2.length-1]);
//   return arrMultiply;
// };


// console.log(findProd(arr1,arr2)); //[12, 90, 782, 312, 408, 1]




