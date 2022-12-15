// PRIMITIVE TYPES
const number = 1;
const num2 = number;

console.log(num2); // 1

// REFERENCE TYPES
const person = {
    name : "Max"
};

const secondPerson = person;

person.name = "Manu";

console.log(secondPerson);

