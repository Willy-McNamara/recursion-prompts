/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // edge cases
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 1;
  }
  // base case
  if (n === 1) {
    return n;
  } else { // recursion
    return (n * (factorial(n - 1)));
  }
};

// I - Takes in a non-negative integer
// O - returns it's factorial (integers multiplied by the next smallest int until zero)
// C -
// E - negative numbers

// Base Case - I believe if 1 were fed in, that would be the base case.
  // if (n === 1) {return n}
    // else {
    //   return (n * (factorial (n - 1)));
    // }

// Strategy - the question is, how can I call my factorial function
  // inside of my factorial function such that we will eventually reach a base case
  // at that point, I need the call stack to execute in such a way that it multiplies
  // each number appropriately
  // n * ( factorial(n-1) )


//---------------------------------------------------------------------------------------------------------
// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // edge case
  if (array.length === 0) {
    return 0;
  }
  // base case
  if (array.length === 1) {
    return array[0];
  } else {
    return (array[0] + sum(array.slice(1)));
  }
};
// I - an array of integers
// O - the sum of each element
// C -
// E - empty array, array of one

// Base Case - array has length of one.
  // if (array.length === 1) {return array[0]}

// Strategy - since i cant edit the input array, i will make a copy for each
  // recursion (actually use slice, which takes a SHALLOW COPY).
  // this will splice out one element at a time, narrowing my array until it
  // has one element. at that point, we will return the singlular element back up into a chain
  // of execution contexts which return the addition of their current element, plus the spliced
  // array (which will now be a number as we move up the execution context)

//---------------------------------------------------------------------------------------------------------
// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15  ([2,3],[[4]],5])
var arraySum = function(array) {
  // edge case
  if (array.length === 0) {
    return 0;
  }
  // base case
  if ((array.length === 1) && (!Array.isArray(array[0]))) {
    return array[0];
  } else if (Array.isArray(array[0])) {
    return (arraySum(array[0]) + arraySum(array.slice(1)));
  } else {
    return (array[0] + arraySum(array.slice(1)));
  }
};

// I - an array containing numbers and arrays
// O - the sum of all elements nested or otherwise
// C -
// E - empty array, one element

// Base Case - one element in array
  // if length of array is one, and element at index 0 isnt an array
    // return element

// Strategy - check to see if the current element is an array, and if it's length is one
  // if it isnt, check to see if current element is an array
    // if it is, return the sum of (arraySum on that element) + (arraySum on the sliced, remaining array)
    // if it is not an array, return the sum of current + (arraySum on the sliced, remaining array)



//---------------------------------------------------------------------------------------------------------
// 4. Check if a number is even.
var isEven = function(n) {
  // base case
  if (n === 0) {
    return true;
  }
  // make positive (only necessary on first step)
  if (n < 0) {
    n *= -1;
  }
  // test recursion
  if ((n-2) < 0) {
    return false;
  } else {
    return isEven(n-2);
  }
};

// I - a number
// O - boolean
// C -
// E - if num is 0

// Base Case - if num is zero
 // if n === 0, return true

// Strategy - first flip numbers to positive if n < 0, (n *= -1)
  // now if n - 2 < 0, return false
  // otherwise run isEven on n - 2


//---------------------------------------------------------------------------------------------------------
// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // system for treating negatives
  var isNeg = 1;
  if (n < 0) {
    isNeg *= -1;
    // make positive
    n *= -1;
  }
  // edge case for 0
  if (n === 0) {
    return 0;
  }
  // edge case for one
  if ((n - 1) === 0) {
    return 0;
  }
  // base case
  if ((n - 1) === 1) {
    return (isNeg * 1);
  } else { // recursion, pass in next lowest number, account for negative
    return ((isNeg * (n - 1)) + (sumBelow(isNeg * (n - 1))));
  }
};

// I - integer
// O - integer
// C -
// E - takes in 1, returns zero

// Base Case - takes in 2, returns 1

// Strategy - create some indicator about negative, then turn the numbers positive
  // handle edge cases for 1 and zero


//---------------------------------------------------------------------------------------------------------
// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  // logic so that x is always greater than y
  if (y > x) {
    var z = y;
    y = x;
    x = z;
  }
  // edge cases
  if ((x === y) || ((x - y) === 1)) {
    return [];
  }
  // base case
  if (x - y === 2) {
    return [y + 1];
  } else { // recursion
    return range(x - 1, y).concat([x - 1]);
  }
};

// I - two integers
// O - an array of all the integers between them
// C -
// E - numbers are the same, numbers are only one apart

// Base Case - numbers are separated by one integer
  // if x - y = 2, return y + 1 in an array

// Strategy - i need to know which is greater, so I will include
  // conditional logic to make x always the larger of the two
  // base case
  // then I need to bring x down toward y with every invocation, so make x - 1 my new x
    // leaving x - 1 as an array which will concat with the eventual return of that next fucntion call


//---------------------------------------------------------------------------------------------------------
// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // logic for neg exp
  var isNeg = false;
  if (exp < 0) {
    isNeg = true;
    exp *= -1;
  }

  // edge case
  if (exp === 0) {
    return 1;
  }
  // base case
  if (exp === 1) {
    return base;
  } else if (isNeg) {
    return (base * exponent(base, (exp - 1))) ** -1;
  } else {
    return base * exponent(base, (exp - 1));
  }
};

// I - two integers, a base and an exp
// O - an integer
// C -
// E - exp is zero, base is zero

// Base Case - if exp is one, return base

// Strategy - if exp is not one, multiply base times the invocation of exponent where exp = exp - 1


//---------------------------------------------------------------------------------------------------------
// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // edge cases
  if (n === 1) {
    return true;
  }
    // negatives or zero
  if (n <= 0) {
    return false;
  } else if (n < 1) {// fraction (edge case for neg exponents)
    // reset to it's integer version
    n = n ** -1;
  }
  if (n < 2) {
    return false;
  }
  // base case
  if (n === 2) {
    return true;
  } else {
    return powerOfTwo(n/2);
  }
};

// I - an integer
// O - boolean
// C -
// E - if the input is negative, if the # is one

// Base Case - the number is equal to two

// Strategy - if you continue to divide the number by two, it will
  // equal two before it is less than two (if it's a power of two)


//---------------------------------------------------------------------------------------------------------
// 9. Write a function that reverses a string.
var reverse = function(string) {
  // edge case
  if (string.length === 0) {
    return '';
  }
  // base case
  if (string.length === 1) {
    return string[0];
  } else {
    return reverse(string.slice(1)) + string[0];
  }
};

// I - a string
// O - a string, with the order flipped
// C -
// E - the string has a length of 0, length of 1

// Base Case - string has a lenght of 1

// Strategy - slice off the first char, join it to the invocation of reverse on the remaining string

//---------------------------------------------------------------------------------------------------------
// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // remove spaces and make lowercase
  string = string.split(' ').join('');
  string = string.toLowerCase();
  // edge cases
  if (string.length === 0) {// if length is zero, return false
    return false;
  }
  if (string.length === 1) {// if length is 1, or we've made it all the way to length being 1, return true
    return true;
  }
  if ((string.length === 2) && (string[0] === string[1])) {// prevents us from hitting zero with a correct even palindrome
    return true;
  } else if ((string[0] === string[string.length - 1])) {// if the outer most characters are equal, remove them from string and test function on new string
    return palindrome(string.slice(1, string.length - 1));
  } else { // if out chars are not equal, return false
    return false;
  }
};

// I - string
// O - boolean
// C -
// E - empty string, string has one or two letters

// Base Case - string is of length

// Strategy - first need to make all letters in string lowercase and take out spaces.
  // compare first and last element. if same,


//---------------------------------------------------------------------------------------------------------
// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// I -
// O -
// C -
// E -

// Base Case -

// Strategy -


//---------------------------------------------------------------------------------------------------------
// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// I -
// O -
// C -
// E -

// Base Case -

// Strategy -


//---------------------------------------------------------------------------------------------------------
// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// I -
// O -
// C -
// E -

// Base Case -

// Strategy -


//---------------------------------------------------------------------------------------------------------
// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// I -
// O -
// C -
// E -

// Base Case -

// Strategy -


//---------------------------------------------------------------------------------------------------------
// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// I -
// O -
// C -
// E -

// Base Case -

// Strategy -


//---------------------------------------------------------------------------------------------------------
// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// I -
// O -
// C -
// E -

// Base Case -

// Strategy -


//---------------------------------------------------------------------------------------------------------
// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// I -
// O -
// C -
// E -

// Base Case -

// Strategy -


//---------------------------------------------------------------------------------------------------------
// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};
//#####################################################################################################

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// I -
// O -
// C -
// E -

// Base Case -

// Strategy -


//---------------------------------------------------------------------------------------------------------
// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// I -
// O -
// C -
// E -

// Base Case -

// Strategy -


//---------------------------------------------------------------------------------------------------------
//#####################################################################################################
// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
