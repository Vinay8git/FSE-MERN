//Similar to concept of inheritance.
//Dog will get all properties of Per.
//Object-Based Inheritance.
//Dog object Inherits The Per Object
console.log("Object_Based Inheritance");
let per = {
    name: "Tiger",
    age: 5,
};
let dog = Object.create(per);
dog.sound="Bark";
console.log(per);
console.log(dog);
console.log(dog.name);
console.log(dog.age);