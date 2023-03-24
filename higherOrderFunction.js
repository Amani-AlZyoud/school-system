// Q5- Write a function that, takes an array of integers as input, iterates over the array, and returns a new array.
//  The returned array should contain the result of raising 2 to the power of the original input element.
//  For example,([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
//  Use for and forEach and then map to solve this question to see the difference between the three ways

// Array power of 2 using for loop iteration.
let newArray = [];
let oldArr = [1, 2, 3, 4, 6];

function arrPower2(arr) {
  for (let i = 0; i < arr.length; i++) {
    newArray.push(Math.pow(2, arr[i]));
  }

  return newArray;
}

console.log(`Array power of 2 using for: ${arrPower2(oldArr)}`);

// Array power of 2 using forEach.
let newArray2 = [];
oldArr.forEach((value) => newArray2.push(Math.pow(2, value)));

console.log(`Array power of 2 using forEach: ${newArray2}`);


// Array power of 2 using map.
let newArray3 = oldArr.map((value) => Math.pow(2, value));
console.log(`Array power of 2 using map: ${newArray2}`);


// Q6- Write a function that, takes an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.
// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.
// For example:([1,2,3,"israa"]) returns ['odd','even','odd','N/A'].


let resultArr;
let testArr2 = [1, 2, "Amani", 0, 9];
function evenOdd(arr) {

    resultArr = arr.map((value) => {
        if (typeof(value) == "number") { 
            if (value % 2 == 0) {
                return "even";
            } else {
                return "odd";
            }
        }
        return "N/A";
    });

    return resultArr;
}

console.log(`EvenOdd Array: ${evenOdd(testArr2)}`);


// Q7- Write a function named fizzbuzz that takes in an array of numbers.
// Iterate over the array using forEach or map to determine the output based on several rules:
// - If a number is divisible by 3, add the word "Fizz" to the output array.
// - If the number is divisible by 5, add the word "Buzz" to the output array.
// - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
// - Otherwise, add the number to the output array.
// Return the resulting output array.

let newResultArr;
function fizzbuzz(arr) {
    newResultArr = arr.map((value) => {
  
        if( arr.length == 0 ) {}

        else if((value % 3 == 0) && (value % 5 == 0)){
            return "Fizz Buzz";
           }

        else if (value % 3 == 0) {
                return "Fizz";
            }

        else if (value % 5 == 0) {
                return "Buzz";
            }
        
        else {
                return value;
            }
    });

    return newResultArr;

}

console.log(`FizzBuzz Array: ${fizzbuzz([45, 2, 3, 4, 5, 15, 7, 9, 30])}`);