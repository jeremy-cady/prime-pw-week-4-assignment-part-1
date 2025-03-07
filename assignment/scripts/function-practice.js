console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log('In helloName:', name);
  console.log(`Hello ${name}!`);
  return name;
} //end helloName
// Remember to call the function to test
helloName('Jeremy');


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log('In addNumbers:', firstNumber, secondNumber );
  let sum = firstNumber + secondNumber;
  return sum;
  // return firstNumber + secondNumber;
} //end addNumbers
console.log(addNumbers(6, 7));



// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
  console.log('In multiplyThree:', num1, num2, num3);
  let product = num1 * num2 * num3;
  return product;
} // end multiplyThree
console.log(multiplyThree(6, 9, 34));



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log('In isPositive', number);
  
  if ( number > 0 ){
    return true;
  } //end if
  else { 
    return false;
  } //end else
} // end isPositive 
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  console.log('In getLast:', array);
  if (array.length>0){
    let lastItem = array[array.length - 1];
    return lastItem;
  } // end if
  else {
    return 'undefined';
  } //end else
} //end getLast
let cityArray = ['New York', 'Chicago', 'Minneapolis', 'Kansas City', 'Seattle'];
console.log(getLast(cityArray));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  console.log('In find', value, array);

  for (let element of array) {
    if (element === value) {
      return true;
    } //end if
  } //end for
  return false;
} //end find
let numArray = [27, 45, 89, 786, 1009, 4598];
console.log(find(89, numArray));
console.log(find(77, numArray));



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  console.log('In isFirstLetter', letter, string);

  if (letter === string[0]) {
    return true;
  } //end if
  else {
    return false;
  }
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  console.log('In sumAll:', array);
  
  let sum = 0
  // TODO: loop to add items
  for (i=0; i<array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let numberArray = [6, 99, 10, 765, 25, 67, 924];
console.log(sumAll(numberArray));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let inputArray = [4, 89, -10, 72, 0, -33, 793];

function returnPositives (array) {
  console.log('In returnPositives:', array);

  let newNumArray = [];

  for (let integer of array) {
    if (integer > 0) {
      newNumArray.push(integer);
    } //end if
  } //end for
  return newNumArray;
  
} // end returnPositives
console.log(returnPositives(inputArray));




// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// From CodeWars:
// Complete the method that takes a boolean value and return a "Yes" string for true, 
// or a "No" string for false.

function boolToWord( bool ){
  if (bool === true) {
    return 'Yes';
  }
  else if (bool === false){
    return 'No';
  }
}

console.log(boolToWord(true));
console.log(boolToWord(false));

