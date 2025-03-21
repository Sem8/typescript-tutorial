// let age: number = 20;

// if (age < 50)
//     age += 10;
// console.log(age)

// Built-in types

let sales: number = 123_456_789;
let course: string = "Typescript";
let is_published: boolean = true;
let level;

/* 1. any Type */

level = 1;
level = "a";

// function render(document) {
//     console.log(document)
// }
// function render(document: any) {
//     console.log(document)
// }

/* 2. Arrays */

// let numbers: number[] = [1, 2, 3];

// // explicit any type when declaring empty array
// let numbers = []
// numbers[0] = 1;
// numbers[1] = "1";

// // explicit number type array with empty array
// let numbers: number[] = [];
// // get access to all number methods when declare array elements as numbers
// numbers.forEach(n => n.)

/* 3. Tuples */

let user: [number, string] = [1, "Mosh"];
// user[0].toExponential   // automatically get number methods b/c defined as number
// user[1].charAt   // automatically get string methods b/c defined as string

/* 4. enums */
const small = 1;
const medium = 2;
const large = 3;

// PascalCase
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize = Size.Medium;
console.log(mySize);

/* 5. Functions */

// specify return type
// function calculateTax(income: number): number {
//     return 0;
// }

// specify void if not returning anything
// function calculateTax(income: number): void {
//     return 0;
// }

// // Make taxYear parameters optional with a ?
// function calculateTax(income: number, taxYear?: number): number {
//     if (taxYear < 2022)
//         return income * 1.2;
//     return income * 1.3
// }
// calculateTax(10_000) // - won't give error even though we didn't provide taxYear parameter

// final function
function calculateTax(income: number, taxYear = 2022): number {
  // let x; //  noUnusedLocals will complain about this
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000);

/* 6. Objects */

// // 6a.
// let employee = {id: 1 };
// employee.name = 'Mosh '  // error bc typescript already inferred shape of object above

// // 6b. Make optional property
// let employee: {
//     id: number,
//     name?: string
// } = {id: 1 };

// employee.name = 'Mosh'

// // 6c. Correct way is to initialize with empty string if no name yet
// let employee: {
//     id: number,
//     name: string
// } = {id: 1, name: ''};

// employee.name = 'Mosh'

// // 6d. Make some properties read only but cannot change
// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void; // function structure inside the object
// } = { id: 1, name: "Sem", retire: (date: Date) => {
//     console.log(date)
// }};

// employee.id = 0;  // error bc id is read only

/* 7. Type aliases */

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Sem",
  retire: (date: Date) => {
    console.log(date);
  },
};

/* 3. Union Types - Give a function parameter more than one type */
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number') {
        // weight. // TS knows to give us number methods only
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs('10kg');