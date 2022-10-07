let cl=console.log;

/* class >> in ES6 it is just synthitical sugar coating over js existing prototype based inheritance (i.e constructor function) */

function Person(nm, age){
    this.nm = nm;
    this.age = age;
    /* this.greeting = function(){
        cl(`Hello there I'm ${this.nm}`)
    } */
}

Person.prototype.greeting = function(){
    cl(`Hello there I'm ${this.nm}`)
}

let p = new Person('Jhon', 33);
cl(p)

let p2 = new Person('jhon', 33);
cl(p2)

p.greeting();


function Emp1(role,empName,empAge){
    Person.call(this,empName,empAge)
    this.role = role
}
Emp1.prototype=Object.create(Person.prototype)
Emp1.prototype.constructor = Emp1;

let  emp1 = new Emp1("Developer" , "Harry", 25)
cl(emp1)

Emp1.greeting();