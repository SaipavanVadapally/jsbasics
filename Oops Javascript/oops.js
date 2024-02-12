class User{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.active= false;
    }
    login(){
        this.active=true;
        console.log(`Welcome ${this.name}- ${this.active}`)
    }
    logout(){
        this.active=false;
        console.log(`LoggedOut-${this.active}`)
    }


    calcAge(){
        return Date.now() - this.age;
    }
}

class Student extends User{
    constructor(name,age,semester,rank){
        super(name,age);
        this.semester=semester;
        this.rank=rank;
    }
}
const StudentOne=new Student("Pavan",23,8,5);
const user2=new User("Raj","06/02/2000","Male")
console.log(StudentOne.name);
StudentOne.login();

