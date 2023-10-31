"use strict";
//TYPESCRIPT BASICS
//functions
/*
function greetPerson(name : any){
    if (name=== 'sanjay'){
        var greet = "Hello" + name;
    }else{
        var greet = "Hi there";
    }
}
greetPerson("Sanjay")
greetPerson(25)
greetPerson(true)


//print values
for(let i=1; i<=5; i++){
    //special inbuit function setTimeOut
    setTimeout(function(){
        console.log(i)
    },1000)
}


//operators in TS
let a=10;
let b=10;
console.log(a==b); //it checks only the values of teh operands
console.log(a==10); //it checks the type as well as the values
//create  an object
let Bike ={
    make: 'Honda',
    model: 'CBR',
    year: '2021',
    price: '21 lakhs'
}
console.log(typeof(Bike))
console.log('make' in Bike)  //to get the value use 'in' operator


//ARRAY
let fruits :string[] = ['apple','oranges', 'Banana']
console.log(fruits);


//MULTITYPE ARRAY
let values: (string|number|boolean)[] = ['apple',2, 'oranges',67.5, true]
for(var value in values){ //to iterate over values
    console.log(values[value])
}


let fruit :string[] = ['Apple','Oranges', 'Banana', 'Grapes']
//sort by ascending
var sortedArray:string[] = fruit.sort((n1,n2) =>{
    if(n1>n2){
        return 1;
    }
    if(n1<n2){
        return -1;
    }
    return 0;
})
console.log(sortedArray);

//Array Methods
//concat()
let alpha = ["a", "b","c"];
let numerics = [1,3,4]
let alphanumeric = alpha.concat(numerics)
console.log(alphanumeric)

//map() method creates a new array with the results of calling a a provided function on every element
//syntax:
    //Array.map(function)
var numbers = [1,4,9]
var roots = numbers.map(Math.sqrt)
console.log(roots)
console.log("root is:" +roots)


//TASK
//write a function that returns array of numbers and returns sum of all the elements
//create a fun to find sum
//fun to do sum()
//loop


function sumOfElements(arr:number[]){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i];
    }
    return sum
}
function calculateSum(){
    //const numbersinput: number[] = [2,5,6,8];
    const numbersinputstring = document.getElementById('num').value;
    const numbersArray = numbersinputstring.split(' ').map(Number);
    //const numbers :number[] =[2,5,6,8];
    const result:number = sumOfElements(numbersArray);
    //selecting p tag properties
    const resultElement = document.getElementById('result');
    if(resultElement){
        resultElement.innerHTML='Sum of array elements' + result;
    }
    //console.log("Sum of array elements :" , result);
}

//enum in javascript
enum PrintMedia{
    newsPaper = "Hindu",
    NewsLetter = "NEWSLETTER",
    Magazine ="MAGAZINE",
    Book ="BOOK"
}
console.log(PrintMedia.newsPaper)

//ANONYMOUS FUNCTION
/*
var varName = function(arguments){
    //body
}
var result = function(a: number,b:number){
    return a+b;
}
var c = result(5,5);

//ARROW FUNCTION
/*Syntax:
    (parameters)=>expression

let sum = (x:number, y:number)=>{
    return x+y;
}
console.log(sum(4,5));
//without parameters
let Print = ()=>console.log("hello we are learning!!")

//TASK--USE ARROW FUNCTION
//Write  a function that takes an array of strings and returns an array of strings and returns a new array with all elwments
//converted to uppercase:
a =["hello world", "i am appu"]
o/p
a= ["HELLOWRLD", "I  AM APPU"]

const convertToUpperCase =(a:string[])=>{
    return a.map(item=>item.toUpperCase());
}
const a:string[] = ["apple","orange","banana"]
const upperCaseArray:string[] = convertToUpperCase(a);
console.log(upperCaseArray)


//TASK
//Write an arrow function that takes an array of numbers as a parameter
//and returns a new array with each element multiplied by 2

const multiplyByTwo = (arr:number[]):number[]=>arr.map((num)=>num*2)

const arrayInput :number[] = [1,2,3,4,5]
const multipliedArray:number[] = multiplyByTwo(arrayInput);
console.log(multipliedArray)


//Optional parameters in TS
//the parameters that may or may not recieve a value can be appended with a '?' to markthem a soptional

function greet(greetings:string, name?:string):string{
    return greetings+ '' +name + '!';
}

console.log(greet('Hello', 'Steve'))
console.log(greet('Hi'))
console.log(greet('Hi','Bill','Gates')) //error expected 2

//CLASS

class Employee{
    //instance variables
    empCode : number=0;
    empName : string='';
    //__init__(self, code, name)
    constructor(code:number, name:string){
        this.empName=name;
        this.empCode=code;
    }
    //custom methods
    //normal way of creating function
    //function display() {
    //    console.log(this.empName + this.empCode)
    //using arrow function
    display = ()=>console.log(this.empName + this.empCode);
}
//create an object
let emp = new Employee(1001,'Sanjay')
emp.display();


//Create a class with student fields name,roll no,mark,grade
//Create a grade tracker method to assign grade
//If mark less than 60  then C and so on .................assign grade
//display method todisplsy all records
//pass only anem roll no mark in constructor
//use arrow function to complete the task

class Student{
    studName : string='';
    studRoll : number=0;
    studMark : number=0;
    studGrade : string='';
    constructor(name:string, roll:number, mark:number){
        this.studName=name;
        this.studRoll=roll;
        this.studMark=mark;
        this.studGrade= this.gradeTracker(mark);
    }

gradeTracker = (mark:number)=> {
    if (mark>=50 && mark <=60){
        return 'C'
    }else if (mark>=61 && mark <=70){
        return 'B'
    }else if (mark>=71 && mark <=80){
        return 'A'
    }
}
    display = ()=>console.log(this.studName + this.studRoll + this.studMark + this.studGrade);
}
let stud = new Student('aashi', 1, 80)
stud.display();

//INHERITANCE
//create a parent class person
class Person{
    name : String='';
    constructor(name:string){
        this.name = name;
    }
}
class Employee extends Person{
    empcode :number=0;
    constructor(empcode:number, name:string){
        super(name);
        this.empCode = empcode
    }
    displayName= ():void=>{
        console.log("Name=" + this.name + " " + "EmployeeCode"+this.empcode)
    }
}
//create an object
let emp = new Employee(100,"Bill")
emp.displayName();


//INTERFACE

interface IEmployee {
    //variables
    empcode:number;
    name:string;
    getSalary:(empCode:number)=>number;
}
class Employee implements IEmployee{
    empCode:number=0;
    name: string='';
    constructor(code: number, name:string){
        this.empCode = code;
        this.name = name;
    }
    //implement the abstract method in employee class
    getSalary (empCode: number):number{
        return 40000;
    }
}
//create object
let emp = new Employee(1, 'Steve')
console.log(emp.getSalary(1))


// TASK
// Create a shape interface with name property and area() method
// create circle and square classes implements the shape interface
// Implement the area method in these classes
// create object of these classes with values and pass the object
// to a function which resolves Shape object which displays there shapes and area

interface IShape{
    name:string;
    area():number;
}

class Circle implements IShape{
    radius:number=0;
    name:string='';
    constructor(name:string, radius:number){
        this.radius = radius;
        this.name = name;
    }
    area():number {//implement the area method for circle
        return Math.PI *this.radius * this.radius;
    }
}
//same create a class for Square
//function which receieves Objects and print name and area
function displayShapeArea(shape:IShape){
    console.log(`Area of ${shape.name} is ${shape.area()}`)
}

//create the object
const circle = new Circle('Circle', 5);
//const square = new Square('Square',4);
displayShapeArea(circle); //call


//SYNCHRONOUS EXAMPLE
console.log("START");
function synchronousFunction(){
    for(let i=0;i<3;i++){
        console.log("Synchronous code" + i)
    }
}
synchronousFunction();
console.log("END")

//ASYNCHRONOUS EXAMPLE
function showLoadingScreen(){
    console.log("1.loading screen Appeared")
}

function hideLoadingScreen(){
    console.log("4.Loading Screen Hidden")
}

function getDataFromAPI(callback){

    console.log("2. start pulliying data")
    setTimeout(()=>{
        console.log("3.finished pulling data")
        callback();
        },2000)
}
showLoadingScreen();
getDataFromAPI(hideLoadingScreen);


inoreder to handle asynchronous code
1. to use callback
SYNTAX"
    function myFunction(callback){
        //code
        callback();
    }

//TASK
console.log("Hi")
setTimeout(function cb(){
    console.log("hi there")
},5000);

const getData = ()=>{
    setTimeout(()=>{
        return {data:['faith','infotech']}
    },1000)
}
const data = getData();
console.log(data)

//answer using arrow function
console.log("Hi")
setTimeout(function cb(){
    console.log("hi there")
},5000);
const getData = (callback:any)=>{
    setTimeout(()=>{
        const result = {data:['faith','infotech']}
        callback(result)
    },1000)
}
getData((data:any)=>{
    console.log(data);
})

//answer using normal function
console.log("Hi")
setTimeout(function cb(){
    console.log("hi there")
},5000);

const getData = ()=>{
    setTimeout(()=>{
        callback({data:['faith','infotech']});
    },1000)
}
getData(function(data:any){
    console.log(data)
});
*/ 
