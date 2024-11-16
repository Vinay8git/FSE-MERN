// var arr=[10,20,30,40,50];
// arr.forEach((val, ind, array) => {
//     console.log("Value: " + val+ " Index:"+ind+" Array: "+array);
// })

var arr=[10,20,30,40,50];
arr.forEach((_, ind) => {
    console.log("Value: " + arr[ind]+ " Index:"+ind);
})

var ar=arr.filter(a=>a>20);
console.log(ar);

var x=arr.find(a=>a>40);
console.log(x);