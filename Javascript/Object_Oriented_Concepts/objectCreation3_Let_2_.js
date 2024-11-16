let person={
    name: "John",
    age: 30,
    roll: 126,
    greet: function(){
        console.log("Hello, my name is " + this.name);
    }
};
console.log(person);
person.greet();
