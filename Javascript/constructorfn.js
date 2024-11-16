function Student(name, age, branch)
{
    this.name=name;    // = st.name
    this.age=age;       // = st.age
    this.branch=branch;
    console.log(this);
}
Student.college="IIT Kanpur";// Static Variable
st=new Student("Dua", 22, "Singer");
console.log(st);
console.log(st.name);
console.log(st.age);
console.log(st.college);  //Undefined
console.log(Student.college);

// var Employee=(name, cid, branch, mob)=>{
//     this.name=name;
//     this.cid=cid;
//     this.branch=branch;
//     this.mob=mob;
//     console.log("Inside Fn", this);
// }

// emp=new Employee("Vinay", 164, "CSE", 9999999);
// console.log(emp);

//TypeError: Employee is not a constructor. 
//Arrow Function cannot be treated as constructors. 