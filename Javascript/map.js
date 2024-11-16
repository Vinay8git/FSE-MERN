arr=[10,20,30,40,50];
var ar=arr.map(a=>a*2);
console.log(arr);
console.log(ar);

var ar1=arr.reduce((pre, next)=>pre+next); // convert array into a single value by applying function on each element of the array (starting from left)//Output: [10, 20//Output: [10, 20/*
console.log(ar1);


var arr1 = ['Hello', 1, true, NaN, 'Bye']; // initialise an array of elements
var countArr = arr1.map(ele => typeof ele === 'string' ? 1 : 0); // map to 0 and 1
var sum = countArr.reduce((prev, curr)=> prev + curr); // reduce for sum
console.log("Arr:",arr1); // print original array
console.log("Array From Map:", countArr); // print array returned from map method
console.log("Number Of Strings:",sum); // print number of strings 

//
var arr = [
    [1, 2, 3, 4],
    [1, 2],
    [1, 2, 3, 4, 5, 6],
    [],
]; // initialise a two-dimensional array
var sum = arr.map(ele => {
    return ele.length // length of array
    }).reduce((prev, curr)=> prev + curr); // find sum
console.log("arr:",arr); // print original array
console.log(sum);