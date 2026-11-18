// Part 1:Coding Questions
// 1. Convert the string "123" to a number and add 7.
const strNum = "123";
const result1 = Number(strNum) + 7;
console.log("1:", result1); 

// 2. Check if the given variable is falsy and return "Invalid" if it is.
function checkFalsy(val) {
  if (!val) {
    return "Invalid";
  }
  return val;
}
console.log("2:", checkFalsy(0));

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
const oddNumbers = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  oddNumbers.push(i);
}
console.log("3:", oddNumbers.join(", ")); 

// 4. Create an array of numbers and return only the even numbers using filter method.
const nums4 = [1, 2, 3, 4, 5];
const evenNumbers = nums4.filter((num) => num % 2 === 0);
console.log("4:", evenNumbers); 

// 5. Use the spread operator to merge two arrays, then return the merged array.
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log("5:", mergeArrays([1, 2, 3], [4, 5, 6])); 

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday).
function getDayOfWeek(dayNum) {
  switch (dayNum) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day";
  }
}
console.log("6:", getDayOfWeek(2)); 

// 7. Create an array of strings and return their lengths using map method
const strings7 = ["a", "ab", "abc"];
const stringLengths = strings7.map((str) => str.length);
console.log("7:", stringLengths); 

// 8. Write a function that checks if a number is divisible by 3 and 5.
function checkDivisible(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  }
  return "Not divisible by both";
}
console.log("8:", checkDivisible(15)); 

// 9. Write a function using arrow syntax to return the square of a number
const square = (num) => num * num;
console.log("9:", square(5)); 

// 10. Write a function that destructures an object to extract values and returns a formatted string.
function formatPerson({ name, age }) {
  return `${name} is ${age} years old`;
}
const person = { name: "John", age: 25 };
console.log("10:", formatPerson(person));

// 11. Write a function that accepts multiple parameters (two or more) and returns their sum.
function sumAll(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}
console.log("11:", sumAll(1, 2, 3, 4, 5));

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
delayedSuccess().then((msg) => console.log("12:", msg)); 

// 13. Write a function to find the largest number in an array.
function findLargest(arr) {
  return Math.max(...arr);
}
console.log("13:", findLargest([1, 3, 7, 2, 4])); 

// 14. Write a function that takes an object and returns an array containing only its keys.
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log("14:", getObjectKeys({ name: "John", age: 30 })); 

// 15. Write a function that splits a string into an array of words based on spaces.
function splitWords(str) {
  return str.split(" ");
}
console.log("15:", splitWords("The quick brown fox")); 
// ==========================================
// Part 2:Essay Questions
/*
1. What is the difference between forEach and for...of? When would you use each?
- `forEach` is an Array method that takes a callback function and executes it for each element. It cannot be stopped early using `break` or `continue`, and it does not work well with `async/await` (it won't wait for promises to resolve).
- `for...of` is a loop statement that works on any iterable (Arrays, Strings, Maps, Sets). It supports `break`, `continue`, `return`, and `await`.
- When to use: Use `forEach` for clean, simple, synchronous operations across every item in an array. Use `for...of` when you need to exit the loop early, iterate over non-array iterables, or handle asynchronous code sequentially with `await`.

2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.
- Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their scope during the compilation phase before code execution. `var` declarations are hoisted and initialized with `undefined`, while function declarations are hoisted with their full body.
- The Temporal Dead Zone (TDZ) is the period between entering a scope and the actual declaration line of a `let` or `const` variable. Accessing the variable in the TDZ throws a `ReferenceError`.
- Example:
  console.log(a); // undefined (hoisted)
  var a = 5;

  console.log(b); // ReferenceError: Cannot access 'b' before initialization (TDZ)
  let b = 10;

3. What are the main differences between == and ===?
- `==` (Loose Equality) compares two values for equality after performing type coercion (converting them to a common type). For example, `5 == "5"` evaluates to `true`.
- `===` (Strict Equality) compares both value and data type without performing type conversion. For example, `5 === "5"` evaluates to `false`.

4. Explain how try-catch works and why it is important in async operations.
- A `try...catch` block wraps code that might throw an error inside `try`. If an error occurs, execution immediately jumps to the `catch(error)` block, preventing the application from crashing and allowing graceful error handling.
- In async operations (especially using `async/await`), external requests like API calls or database queries can fail due to network issues or invalid responses. `try...catch` allows you to catch rejected promises cleanly in synchronous-looking code.

5. What's the difference between type conversion and coercion? Provide examples of each.
- Type Conversion (Explicit) is when the developer manually converts a value from one data type to another using built-in functions.
  Example: `Number("42")` converts the string `"42"` to the number `42`.
- Type Coercion (Implicit) is when JavaScript automatically converts data types behind the scenes during operations involving mismatched types.
  Example: `"5" + 2` results in `"52"` (the number `2` is coerced into a string), whereas `"5" - 2` results in `3` (the string `"5"` is coerced into a number).
*/