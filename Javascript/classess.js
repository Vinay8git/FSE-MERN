class Architecture{
    constructor(name, usp){
        this.name = name;
        this.usp = usp;
        this.setUsp=(usp)=>{             //Setter Function
            this.usp = usp;
        }
        this.getUsp=()=>this.usp;        //Getter Function
    }
}
book1=new Architecture("David", "Architect");
book2=new Architecture("Tom", "Civil Engineer");
console.log(book1);
book1.setUsp("Mechanical");
console.log(book1.getUsp());
console.log(book1);