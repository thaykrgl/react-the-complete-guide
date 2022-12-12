// NORMAL FUNCTION
function printMyName(name){
    console.log(name);
}

printMyName("Taha");

// ARROW FUNCTION
const printMyName = (name) => {
    console.log(name);
}

printMyName("Taha");

// Alternative Way 
const printMyName = name =>{
    console.log(name);
}

printMyName("Taha");

const multiply = (number) => {
    return number * 2;
}

console.log(multiply(2));

// Alternative Way
const multiply2 = number => number * 2;

