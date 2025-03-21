// let age: number = 20;

// if (age < 50)
//     age += 10;
// console.log(age)

// Built-in types

let sales: number = 123_456_789
let course: string = 'Typescript';
let is_published: boolean = true;
let level;

/* any Type */

level = 1;
level = 'a';

// function render(document) {
//     console.log(document)
// }
// function render(document: any) {
//     console.log(document)
// }


/* Arrays */

// let numbers: number[] = [1, 2, 3];

// // explicit any type when declaring empty array
// let numbers = []
// numbers[0] = 1;
// numbers[1] = "1";

// // explicit number type array with empty array
// let numbers: number[] = [];
// // get access to all number methods when declare array elements as numbers
// numbers.forEach(n => n.)


/* Tuples */

let user: [number, string] = [1, 'Mosh']
// user[0].toExponential   // automatically get number methods b/c defined as number
// user[1].charAt   // automatically get string methods b/c defined as string


/* enums */
const small = 1;
const medium = 2;
const large = 3;

// PascalCase 
enum Size {Small = 1, Medium, Large}
let mySize = Size.Medium
console.log(mySize);