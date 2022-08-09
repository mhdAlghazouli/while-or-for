// let toyota = [`corolla`,`camry`,`rav-4`,`tacoma`,`tundra`];

// // if condition

// console.log(toyota);

// for (let i = toyota.length ; i > 0  ; i--) {
  
//   toyota.pop();

//   console.log(toyota);

// }

// // console output : [ 'corolla', 'camry', 'rav-4', 'tacoma', 'tundra' ]
//                       // [ 'corolla', 'camry', 'rav-4', 'tacoma' ]
//                             // [ 'corolla', 'camry', 'rav-4' ]
//                                   // [ 'corolla', 'camry' ]
//                                         //  [ 'corolla' ]
//                                               //  []

// // while condition

// let counter = toyota.length;

// while(counter > 0){

//   toyota.pop();

//   console.log(toyota);

//   counter-- ;
  
// };

// // console output : [ 'corolla', 'camry', 'rav-4', 'tacoma', 'tundra' ]
//                       // [ 'corolla', 'camry', 'rav-4', 'tacoma' ]
//                             // [ 'corolla', 'camry', 'rav-4' ]
//                                   // [ 'corolla', 'camry' ]
//                                         //  [ 'corolla' ]
//                                               //  []







// // Function `printNumbers()` prints numbers from 1 to 10 using for loop.

// function printNumbers() {
//       for(let i = 1 ; i <=10 ; i++){
//             console.log(i);
//       };
// };


// function printNumbers() {
//       let counter = 1;
//       while(counter <= 10) {
//             console.log(counter);
//             counter++;
//       };
// };

// printNumbers(); //1 2 3 4 5 6 7 8 9 10










// // Function `printArray()` prints all the elements of a 2D array using nested for loops.

// let arr1 = [[1, 2],[3, 4],[5, 6]];

// function printArray(array){
//       for(let i = 0 ; i < array.length; i++){
//             let char = array[i];
//             for(let j = 0 ; j < char.length; j++){
//                   console.log(char[j]);
//             };
//       };
// };


// function printArray(arr1){
//       let counter = 0;

//       while(counter < arr1.length){

//             let char = arr1[counter];
//             let counter1 = 0;

//             while(counter1 < char.length){

//                   console.log(char[counter1]);
//                   counter1++;
//             };
//             counter++;
//       };
// };


// printArray(arr1); //1 2 3 4 5 6











// // Function `printEven()` prints all the even numbers of a 2D array using for loops and ‘%’ operator.

// let arr2 = [13,23,12,45,22,48,66,100];

// function printEven (array) {
//       for(let i = 0 ; i < array.length; i++){
//             let char = array[i];
//             if(char % 2 === 0){
//                   console.log(char);
//             };
//       };
// };



// function printEven(arr2) {
//       let counter = 0;
//       while(counter < arr2.length){
//             let char = arr2[counter];
//             if(char % 2 === 0){
//                   console.log(char)
//             }
//             counter ++
//       }
// }










// // Function `deleteElement()` deletes all the occurrence of element from the given array.



// let arr3 = [23,56,4,78,5,63,45,210,56];

// function deleteElement(array,target) {
//       for(let i = 0 ; i < array.length ; i++){
//             let char = array[i];
//             if(char === target) {
                  
//                   array.splice(i,1);

//             };
//       };
      
//       return array
// };



// function deleteElement(arr3,target){
//       let counter = 0;
//       while(counter < arr3.length){
//             let char = arr3[counter];
            
//             if(char === target){
//                  arr3.splice(counter,1)
//             }
//             counter ++
//       }return arr3
// }

// console.log(deleteElement(arr3,56)); //[23, 4, 78, 5, 63, 45, 210]













// // Function numPower() to returns power of number for provided exponential value using for loop.

// function numPower(num1,num2){

//       let result = 1;

//       for(let i = 0 ; i < num2; i++){
            
//             result = result * num1;
            
//       };
//       return result
// };


// function numPower(num,target){
//       let result = 1;
//       let counter = 0;
//       while (counter < target) {
//             result = num * result;
//             counter++
//       }
//       return result
// }

// console.log(numPower(4,3)); //64
// console.log(numPower(16,2)); //256

