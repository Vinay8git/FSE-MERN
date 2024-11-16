// var sum=0;
// for(var i=1;i<=10;i++)
// {
//     sum+=i;
// }
// console.log(sum);

//First n Natural Numbers
function sum(n)
{
    if(n==1) return 1;
    return n+sum(n-1);
}
console.log(sum(20));