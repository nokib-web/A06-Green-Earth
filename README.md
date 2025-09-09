

#### Answer of the following question-:


#### 1) What is the difference between var, let, and const?

Ans: 

1. Scope

var → Function-scoped (available throughout the function it’s declared in).

let & const → Block-scoped (available only inside the block {} where they’re declared).

2. Re-declaration

var → Can be re-declared in the same scope.

let & const → Cannot be re-declared in the same scope.


3. Re-assignment

var → Can be reassigned.

let → Can be reassigned.

const → Cannot be reassigned (but objects/arrays declared with const can still have their contents changed).


4. Hoisting

var → Hoisted (moved to the top of scope) and initialized with undefined.

let & const → Hoisted too, but not initialized → they stay in the Temporal Dead Zone (TDZ) until declared.




#### 2) What is the difference between map(), forEach(), and filter()? 

Ans: 

1. map()

Purpose → Creates a new array by applying a function to each element.

Returns → A new array with transformed values.

Original array → Not changed.

2. forEach()

Purpose → Loops through each element, executes a function, but does not return anything.

Returns → undefined.

Original array → Can be modified inside the loop (not recommended for immutability).

3. filter()

Purpose → Creates a new array containing only elements that pass a condition.

Returns → A new array (subset of original).

Original array → Not changed.

#### 3) What are arrow functions in ES6?

Ans: 
Arrow functions are a shorter way to write functions in JavaScript (introduced in ES6).
They’re especially useful for inline functions and callbacks.

example: const add = (a, b) => a + b;
<!-- regular function:
function add(a, b) {
  return a + b;
} -->


#### 4)How does destruc turing assignment work in ES6?
Ans: 
Array destructuring → [a, b] = array

Object destructuring → {a, b} = object

Supports defaults, renaming, and nesting.

Makes code cleaner and shorter.

#### 5) Explain template literals in ES6. How are they different from string concatenation?
Ans: 

1.Template literals are a new way to work with strings in JavaScript (introduced in ES6).
They use backticks (`) instead of quotes (' or ").

Concatenation = “add pieces together manually.”

Template literal = “Write naturally, let JS handle it.”
