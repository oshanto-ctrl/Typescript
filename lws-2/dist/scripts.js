let playerName = "Shakib-Al-Hasan";
let age = 38;
// Explicitly Setting Type from (a, b) any type.
function multiply(a, b) {
    return a * b;
}
console.log(multiply(7, 10));
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
export {};
// Person.country = "Australia"; // TS won't let changing the schema of Object to add another field to obj.
