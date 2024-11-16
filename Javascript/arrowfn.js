//Also known as Anonymous functions

var func = (a,b) => {
    var sum=a+b;
    return sum;
}
console.log("Sum = ", func(2,5));

var func1 = (a,b) =>
    a+b;

console.log("Sum = ", func1(3,4));

var func2 = a => a*a;
console.log("Square of 5 =",func2(5));

//Arrow Functions are shorter and can be used in place of regular function expressions or declarations.
// They have the following features:

//Arrow function with no parameter
var func3 = ()=> "Hello World";
console.log(func3());

/*
 * Arrow Functions have some differences from the normal functions:
 * - They are shorter and cleaner than regular functions.
 * - Parentheses around parameters are optional if there is only one parameter.
 *   So, you can write 'x => x + 1' instead of '(x) => x + 1'.
 * - If there is only one expression inside the arrow function, you can omit curly brackets too.
 *   So, you can write 'x => x + 1' instead of '(x) => ({return x + 1})'.
 */

var func4 = a  => ({'1' : a }); // arrow function creating object
var func5 = a  => { return {'1' : a }}; // arrow function creating object
console.log("Object with '1' property as 'OK':" , func1('OK')); // print object
console.log("Object with '1' property as 'OK':" , func2('OK')); // print object


var func6 = a => {
    if (a>10)
        console.log("Higher");
    else
        console.log("Lower");
}
func6(13);

const num=[1,2,3,4,5];
const doubled=num.map(n=>n*2);
console.log(doubled);


const sum=num.reduce((add,n)=>add+n);
console.log(sum);


