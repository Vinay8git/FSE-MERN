let car=
{ 
    wheel:4, 
    seats:2
}

let bmw=
{
    color:"Black",
    __proto__ : car    // Synonymous to Inheritance
}
console.log(car, car.__proto__);
console.log(bmw, bmw.__proto__);