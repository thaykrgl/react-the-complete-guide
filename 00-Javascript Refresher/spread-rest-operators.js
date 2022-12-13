// SPREAD OPERATOR
// For Arrays
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers); // [1,2,3,4]

// For Objects
const person = {
    name: "Max"
};

const newPerson = {
    ...person,
    age: 23
};

console.log(newPerson);

// REST OPERATOR
const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1,2,3)); // [1]

