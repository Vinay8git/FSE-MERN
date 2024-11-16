function person(){
    this.age=0;
setTimeout(()=> {
    this.age+=1;
},5000);}

let per=new person();
console.log(per.age);