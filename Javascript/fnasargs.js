function foo(){
    function printDone(){
        console.log("This Is PrintDone function");
    }
    return printDone;
}

var newFunc=foo();
console.log("foo exited");
console.log("Invoking");
newFunc(); // This will call the printDone function because it is a reference to that function, not a copy of it. //undefined //undefined //undefined

function foo(){
    return ()=> console.log("This Is PrintDone Function");
}

var newFunc=foo();
console.log("foo exited");
console.log("Invoking");
newFunc();