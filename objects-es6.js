let person = {
    name : "Steve",
    age : 30,
    isStudent : false
}

console.log(person.name);
console.log(person['age']);

const key = 'age';
console.log(person.key);    // yields undefined
console.log(person[key]);   // yields 30
console.log(person['key']); // yirlds undefined

person.city = 'North York';
console.log(person.city);

let calculator = {
    add(a, b) {
        return a + b;
    },

    subtract : function(a, b) {
        return a - b;
    }
}

console.log(calculator);
console.log(calculator.add);
console.log(calculator.add(5,6));

let user = {
    name : 'Alice',
    greet : function(){
        console.log(`This user is ${this.name}`);
    }
}

user.greet();

const obj = {
    a : 6,
    b : "hello",
    c : function(){
        console.log(`Hi ${this.a}`)
    }
}

let {a, b, c} = obj;

c();        // c does not have access to teh rest of obj object


let arr1 = [1,2,3,4,5];
console.log(1111)
arr1[100] = 8;
for (const k of arr1) {
    console.log(k);
}

// for(let i = 0; i < arr1.length; i++){
//     console.log(`${i}: ${arr1[i]}`);
// }
