function User(username,age,active){
    this.username=username;
    this.age=age;
    this.active=active;

}
User.prototype.login=function(){
    console.log("LOGIN");
}
User.prototype.logout=function(){
    console.log("LOGOUT");
}

function Student(username,age,semester,rank){
    User.call(this,username, age)
    this.semester=semester;
    this.rank=rank;

}
Student.prototype.updateRank =function(newRank){
    this.rank=newRank;
    console.log(this.rank);
}
console.log(User.prototype);
console.log(Student.prototype);


const userOne =new User("Pavan",23);
console.log(userOne.username)
userOne.logout();
const StudentOne= new Student("Raja",60,5,1)
console.log(StudentOne.username);
StudentOne.updateRank(50);