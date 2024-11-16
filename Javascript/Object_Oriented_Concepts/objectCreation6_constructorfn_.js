function person(name, age){
    this.name = name;
    this.age=age;
}
person("John", 18);
person.hobby="Dancing"; // Static Variable
console.log(typeof(person));
console.log(person);

console.log(person.name);
console.log(person.age);