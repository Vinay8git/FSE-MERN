function outer(a) {
    console.log("Outer Block Is Executed",a);
    var b=a;
    function inner()
    {
        console.log("Inner Block Is Executing with args",a,b);
    }
    inner();
    return;
}

var val=outer(1);
console.log(val); //Undefind bcz fn is not returning any values;