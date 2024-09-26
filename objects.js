function Book(a, b){
    this.a = a;
    this.b = b;
}

const book1 = {};
console.log(Object.getOwnPropertyNames(book1.__proto__));
// Output will show properties like: ["constructor", "hasOwnProperty", "isPrototypeOf", ...]
