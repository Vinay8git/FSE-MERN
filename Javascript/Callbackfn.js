function print(){
    console.log("::Callback function::");
}

function fun(foo){
    console.log("In Higher Order Function");
    console.log("Now Calling Function");
    foo(); // calling the callback function passed as an argument to higher order function
    console.log("Done Executing HO Function");
}

fun(print); // prints "In Higher Order Function", "Now Calling Function", "Callback function" and then "Done Executing HO Function".fun(print); 
fun(print);  // passing the callback function 'print' to be executed when called from within 'fun'.

setInterval(()=>{
    console.log("Message");
},100);