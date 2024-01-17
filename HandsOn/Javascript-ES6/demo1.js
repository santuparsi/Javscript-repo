class Person
{
    constructor()
    {
        //variables
        this.fname='Rahul';
        this.lname='Dravid';
    }
    details() //methods
    {
        console.log(this.fname+' '+this.lname);
    }
}
//initiate Person object
let ob=new Person();
ob.details();
let ob1=new Person();
ob1.fname='Sachin';
ob1.lname='Tendulkar';
ob1.details();