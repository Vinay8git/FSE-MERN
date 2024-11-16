function per(name, age){
    this.name=name;
    this.age=age;
}
per.roll=126;
p=new per("Vinay", 18);
console.log(typeof(p));
console.log(p);
console.log(per.roll);
