function addition(a, b)
{
    return a+b;
}
function subtraction(a, b)
{
    return a-b;
}
function multiplication(a, b)
{
    return a*b;
}
function division(a, b)
{
    return a/b;
}
console.log(addition(10,20));
console.log(subtraction(50, 20));
console.log(multiplication(10, 20));
console.log(division(100, 20));
console.log(addition("Hello ", "Lucifer"));  // Plus Operator in JS shos polymorphic behaviour. Do Concat String and Add Digits
console.log(addition(10, NaN));
console.log(subtraction("Lucifer", "Luci"));