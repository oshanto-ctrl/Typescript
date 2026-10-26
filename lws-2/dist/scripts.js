let playerName = "Shakib-Al-Hasan";
let age = 38;
// Explicitly Setting Type from (a, b) any type.
function multiply(a, b) {
    return a * b;
}
// console.log(multiply(7, 10));
// array object
let fruits = ['Apple', 'Banana', 'Watermelon'];
fruits.push("Pineapple");
// fruits.push(34); // won't accept because fruits[]: string
// below object can have string, number, boolean. Not Object {}
let mixed = ["Jonard Tools", 4, true];
mixed.push(false);
// mixed.push({}) // It's an object, can't be set on mixed array if ins't declared before, {};
// Object
let Person = {
    name: "Marnus Labuschagne",
    age: 35,
    isCaptain: true,
};
// Person.country = "Australia"; // TS won't let changing the schema of Object to add another field to obj.
/*
Explicit & Union Types
*/
let name;
let salary;
name = "wwwIUS";
salary = 12000;
// array with explicit type & Union
let numbers = []; // empty array
numbers.push("One", 1, "two", 2);
// for a variable explicit & union type
let a;
a = "1";
a = 1;
// a = false; // Error
/// Object explicit type
let o;
o = {
    name: "Sumon",
    age: 34,
    adult: true,
};
/*
Dynamic Type
What type the varible will be we don't know before.
let corrd: any;
It's like Javascript.
*/
let corrd;
corrd = 533455311;
corrd = "12343534434";
let any_arr = [];
any_arr.push(1, "two", true, { name: "Sumon", age: 34 }, [1, 2, 3]);
// console.log(any_arr);
/*

Function Type
myFunc: Function
'Function' here is a type.
JS uses 'function' as reserved keyword, so TS can't use that.

*/
// let myFunc: Function;
// myFunc = () => {
//     console.log("Hello from myFunc");
// }
// function-Parameter
// Optional value: use ? (c?:type)
// For optional value with default value
// c: string = "Visitor"
const myFunc = (a, b, c = "Consultant at CBI") => {
    // console.log(`Hello ${a} ${b}`); // return type void
    return `Hello ${a} ${b} - ${c}`;
};
console.log(myFunc("Patrick", "Jane"));
// Explicitly set Return type
const add = (a, b) => {
    return (a + b);
};
// console.log(add("A", "B")); // Arg string not assignable Param type number
console.log(add(450, 80));
const userDetails = (id, user) => {
    return `User id is ${id}, name is ${user.name} and age is ${user.age}.`;
};
const sayHello = (user) => {
    return `Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`;
    // Console.log() give an 'Undefined' in Console.
    // return  1;// gives error because of sayHelloFunctionType
};
const id = "CONS101";
const user = {
    name: "Jane",
    age: 40,
};
// Invoke UserDetails
console.log(userDetails(id, user));
console.log(sayHello(user));
/* Function Signatures */
let memeFunc;
memeFunc = (memes, sentBy) => {
    // return `${sentBy} Sent ${memes}+ Memes Video. Check them out!`;
    return memes > 1 ? `${sentBy} Sent ${memes}+ memes. Check them Out` : `${sentBy} Sent a Meme Video.`;
};
// Invoking functions with signature
console.log(memeFunc(1, "Arafat"));
console.log();
let bitBucket;
bitBucket = (bitAmount, bitSender) => {
    const isMultiple = bitAmount > 1;
    return `${bitSender} Sent ${isMultiple ? `${bitAmount}+ Bits` : 'a Bit'}${isMultiple ? '. Check them out!' : ''}`;
};
console.log(bitBucket(0, "S-Rox")); // Still counts as a bit! 
console.log(bitBucket(1, "Z00MB-Eat"));
console.log(bitBucket(9, "SOUL-SOUP"));
export {};
