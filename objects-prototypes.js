// let obj = {};

// console.log(obj.__proto__);

// let temp = "1";
// console.log(temp.__proto__);

// const arr = ['red', 'green'];

// console.log(arr);

let person = {
    name : "Steve",
    age : 30,
    isStudent : false
}

console.log(person.__proto__);

console.log(Object.getOwnPropertyNames(person.__proto__));



