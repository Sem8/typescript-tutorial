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

/* 8. Union Types - Give a function parameter more than one type */
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

/* 9. Intersection types - something that can be one type as well as the other */

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}


/* 10. Literal types -  limit values we can assign to a variable */

// let quantity: number;  // problem is it can take any number not just bt 50 or 100 which is our desired exact nums

// Literal (exact, specific)
// let quantity: 50 = 50;  // CORRECT
// let quantity1: 50 = 51;  // INCORRECT

// 10a. With Union operator
// // Literal (exact, specific)
// let quantity: 50 | 100 = 100;

// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100


/* 11. Nullable types */
// // 11a.
// function greet(name: string) {
//     if (name) {
//         console.log(name.toUpperCase());
//     } else {
//         console.log('Hola');
//     }
// }
// greet(null); // Error bc can't use toUpperCase method on null; setting strictNullChecks: false will not complain about this

// 11b.
function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log('Hola');
    }
}

greet(null); // now acceptable
greet(undefined); // now acceptable


/* 12. Optional Chaining */
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0)

// // 12a. traditional way to handle null or undefined value for object property
// if (customer !== null && customer !== undefined) {
//     console.log(customer.birthday)
// }

// 12b. Optional property access operator
console.log(customer?.birthday?.getFullYear())  // result is undefined

// // 12c. Optional element access operator for arrays
// customer?.[0]

// 12d. Optional call
// let log: any = (message: string) => console.log(message)

let log: any = null;
// log('a')  // w/ log set to null calling this function will crash since set to null
// log?.('a')  // correct way to handle so program doesn't crash
