//-----------------------------------------------------Hoisting

// b()
// console.log(a)

// var a = 'hello'

// function b(){
//     console.log('Called B')
// }

//--------------- Above code behaves like below code. (Hosting)

// function b(){
//     console.log('Called B')
// }

// var a

// b()
// console.log(a)

// a = 'hello'

//-----------------------------------------------Undefined

// var a
// console.log(a)

// if (a === undefined){
//     console.log('a is undefined')
// } else {
//     console.log('a is defined')
// }

//--------------------------------------------------------defined

// var a = 'hello'
// console.log(a)

// if (a === undefined){
//     console.log('a is undefined')
// } else {
//     console.log('a is defined')
// }

//------------------------------------------------------- error

// console.log(a)

// if (a === undefined){
//     console.log('a is undefined')
// } else {
//     console.log('a is defined')
// }

//-------------------------------------------------------------never set undefined

// var a = undefined

//-------------------------------------------Function invocation & Execution stack

// function a(){
// }

// function b(){
//     a()
// }

// b()

//-------------------------------------------------------draw stack for below

// function a(){
//     b()
//     var c
// }

// function b(){
//     var d
// }

// b()
// var d

//------------------------------------------------------- 1 2 undefined 1

// function a(){
//     var d
//     console.log(d)
// }

// function b(){
//     var d = 2
//     console.log(d)
//     a()
// }

// var d = 1
// console.log(d)
// b()
// console.log(d)


//--------------------------------------------------------- 1 2 2 2

// function a(){
//     d
//     console.log(d)
// }

// function b(){
//     d = 2
//     console.log(d)
//     a()
// }

// var d = 1
// console.log(d)
// b()
// console.log(d)

//------------------------------------------------ 1, because of scope & lexical environment


// function a(){
//     console.log(d)
// }

// function b(){
//     var d = 2
//     a()
// }

// var d = 1
// b()

//-----------------------------------------------------2 scope chain

// function b(){

//     function a(){
//         console.log(d)
//     }

//     var d = 2
//     a()
// }

// var d = 1
// b()

//-------------------------------------------------------1 scope chain

// function b(){

//     function a(){
//         console.log(d)
//     }
    
//     a()
// }

// var d = 1
// b()


//-------------------------------------------------------Coersion (converting type) 12

// var a = 1 + '2'
// console.log(a)

//-------------------------------------------------------------12 same result

// var a = 1, b = '2'
// console.log(a + b)

//----------------------------------------------------------- tony, hello tony

// function greet(name){
//     console.log(name)
//     console.log('Hello', name)
// }

// greet('tony')

//----------------------------------------------------------- undefined, hello undefined

// function greet(name){
//     console.log(name)
//     console.log('Hello', name)
// }

// greet()

//----------------------------------------------------------- conditional

// function greet(name){
//     name = name || 'Your name here'
//     console.log('Hello', name)
// }

// greet('Raman')
// greet()

//---------------------------------------------------------------Objects

// var person = new Object()

// person['firstName'] = 'Mukul'
// person['lastName'] = 'Arora'

// console.log(person)  //object without address
// console.log(person.lastName)  //arora

// var firstNameProperty = 'firstName'
// console.log(person.firstNameProperty)  //undefined
// console.log(person[firstNameProperty])  //mukul

// person.address = new Object()

// person.address.home = '104'
// person.address.street = 'williams'

// console.log(person)  //object with address
// console.log(person.address.home)  //104
// console.log(person['address']['home'])  //104

//--------------------------------------------------------------Better way to create objects

// var person = {
//     firstName: 'arun',
//     lastName: 'kumar',
//     address: {
//         home: '4',
//         street: 'main'
//     }
// }

// console.log(person)

// function greet(person){
//     console.log('Hi', person.firstName)
// }

// greet(person)

//-----------------------------------------------------Object literals

// function greet(person){
//     console.log('Hi', person.firstName)
// }

// greet({firstName: 'Rajjo', lastName: 'kumari'})

//---------------------------------------------------------Namespace

// var greet = 'hello'
// var greet = 'hola'

// console.log(greet)

// var english = {}
// var spanish = {}

// english.greetings.greet = 'hello' //error, because greetings is undefined
// spanish.greet = 'halo'

// console.log(english)

//--------------------------------------------------JSON & Object literals

// var objectLiterals = {
//     name: 'harry',
//     age: 20
// }

// console.log("objectLiterals", objectLiterals)
// console.log("objectLiterals JSON", JSON.stringify(objectLiterals))

// var jsonValue = JSON.parse('{"name": "harry","age": 20}')

// console.log("JSON2 converted to objectLiterals", jsonValue)

//------------------------------------------------------------------Functions are objects

// function greet(){
//     console.log("HI")
// }

// greet.language = 'english'

// console.log(greet)
// console.log(greet.language)

//--------------------------------------------------------------------

// function hey(){
//     console.log('hey')
// }

// // hello() // error because of hoisting

// var hello = function(){
//     console.log('hello')
// }

// hey()
// hello()

//------------------------------------------------------------------------ aa working

// function anyone(a){
//     console.log(a)
// }

// anyone(3)
// anyone('hello')
// anyone({
//     name: 'anuj'
// })
// anyone(function(){
//     console.log('here')
// })

//------------------------------------------------------------------------

// function anyone(a){
//     a()
// }

// anyone(function(){
//     console.log('here')
// })

//-----------------------------------------------------------------------By value (primitive)

// var a = 3
// var b = a
// var a = 2

// console.log(a) // 2
// console.log(b) // 3, because premitives create different

//---------------------------------------------------------------------By reference (objects)

// var a = {name: 'rohan'}
// var b = a
// a.name = 'ram' // changing at same address

// console.log(a.name) // ram
// console.log(b.name) // ram, because they point to same memory

// a = {name: 'sita'} // allocating at diff address

// console.log(a.name)
// console.log(b.name)

//----------------------------------------------------------------------this

// function a(){
//     console.log(this)
// }

// var b = function(){
//     console.log(this)
// }

// var c = {
//     a: 'hi',
//     b: function(){
//         self = this // try without self also

//         self.a = 'updated hi to hello'
//         console.log(self)

//         var oo = function(something){
//             self.a = something
//         }
//         oo('updated again !!') // use self
//         console.log(self)
//     }
// }

// a() // window
// b() // window
// c.b() // c ka object

//--------------------------------------------------------------------Array

// var arr = [
//     1,
//     true,
//     {
//         name: 'tonny'
//     },
//     function(name){
//         var greeting = 'hello ' + name
//         console.log(greeting)
//     },
//     'Hi'
// ]

// arr[3](arr[2].name)

//---------------------------------------------------------------------Arguments

// function greet(firstname, lastname, age){
//     // all undefined because of hoisting in first case
//     console.log(firstname)
//     console.log(lastname)
//     console.log(age)
//     console.log(arguments)
//     console.log('arg 0: ', arguments[0])
//     console.log('---------------')
// }

// greet() // we can call without arguments also
// greet('manoj', 'kumar')

//-----------------------------------------------------------------------IIFE function

// var greeting = function(name){
//     return 'hello ' + name
// }('john');

// console.log(greeting)

//------------------------------------------------------IIFE other example, use ; in such cases

// var firstName = 'sukh';

// (function(name){
//     console.log('hello ', name);
// }(firstName));

//-----------------------------------------------------------------------closures

// function greet(say){
//     return function(name){
//         console.log(say, name)
//     }
// }

// greet('hi')('raju')

// var sayHi = greet('hi')
// sayHi('raju')

//--------------------------------------------------------------closures & callback

// function sayHiLater(){
//     var greetings = 'Hi'
//     setTimeout(function(){
//         console.log(greetings)
//     },3000)
// }

// sayHiLater()

//------------------------------------------------------------------------bind 1st way

// var person = {
//     firstname: 'john',
//     lastname: 'green',
//     getfullname: function(){
//         var fullname = this.firstname + this.lastname;
//         return fullname;
//     }
// }

// var logname = function(lang1, lang2){
//     console.log('Hi', this.getfullname())
//     console.log('Arguments : ', lang1, lang2)
// }.bind(person) // bind is  used so that logname can refer to person instead of window.

// logname('en', 'es')

//--------------------------------------------------------------------------bind call apply

// var person = {
//     firstname: 'john',
//     lastname: 'green',
//     getfullname: function(){
//         var fullname = this.firstname + this.lastname;
//         return fullname;
//     }
// }

// var logname = function(lang1, lang2){
//     console.log('Hi', this.getfullname())
//     console.log('Arguments : ', lang1, lang2)
//     console.log('--------------------------')
// }

// //---bind
// var bindlogname = logname.bind(person)
// bindlogname('en')
// bindlogname('en', 'es')

// //---call
// logname.call(person, 'en', 'es')
// //---apply
// logname.apply(person, ['en', 'es'])

// //---using IIFE (why im getting error?)
// (function(lang1, lang2){
//     console.log('Hi', this.getfullname())
//     console.log('Arguments : ', lang1, lang2)
//     console.log('--------------------------')
// }).apply(person, ['en', 'es']);

//---------------------------------------------------------------------example

// var person = {
//     firstname: 'john',
//     lastname: 'green',
//     getfullname: function(){
//         var fullname = this.firstname + this.lastname;
//         return fullname;
//     }
// }

// var person2 = {
//     firstname: 'dhoni',
//     lastname: 'dhoni',
// }

// console.log(person.getfullname()) // global
// console.log(person.getfullname.apply(person2)) // inside

//---------------------------------------------------------------------simple progremming

// arr1 = [1,2,3]
// arr2 = []

// for(var i=0; i < arr1.length; i++){
//     arr2.push(arr1[i] * 2)
// }

// console.log(arr1)
// console.log(arr2)

//---------------------------------------------------------------------functional programming

// var arr1 = [1,2,3,4]

// function performAction(arr, fn){
//     var newArr = []
//     for(var i=0; i < arr.length; i++){
//         newArr.push(fn(arr[i]))
//     }
//     return newArr   
// }

// var arr2 = performAction(arr1, function(item){
//     return item*2
// })

// var arr3 = performAction(arr1, function(item){
//     return item > 2
// })

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

//--------------------------------------------------------------------------Prototype

// var person = {
//     firstName: 'aaaa',
//     lastName: 'bbbb',
//     fullName: function(){
//         return this.firstName + ' ' + this.lastName
//     }
// }

// var john = {
//     firstName: 'john'
// }

// john.__proto__ = person;

// console.log(john.fullName())

//----------------------------------------------------------new keyword, function constructor

// function person(firstname, lastname) {
//     console.log(this);
//     this.firstName = firstname;
//     this.lastnName = lastname;
// }

// person.prototype.getfullname = function(){
//     return oye; // not getting added to person, error
// }

// var raman = new person('raman', 'kumar');
// console.log(raman);


//-------------------------------------------------------------Number creates object

// var a = 3 // primitive
// var b = new Number(3) // object

// console.log(a == b) // true
// console.log(a === b) // false

//---------------------------------------------------------------for in

// arr = ['aa','bb','cc','dd']
// Array.prototype.item = 'cool';

// for(var item in arr){                 // dont use
//     console.log(item, ': ' ,arr[item])
// }

// for(var i=0; i<arr.length; i++){      // use
//     console.log(i+ ': '+  arr[i])
// }

//--------------------------------------------------------------Prototypal Inheritance

// var person = {
//     firstName: 'default',
//     lastName: 'default',
//     greet: function(){
//         return 'Hi' + this.firstName
//     }
// }

// var john = Object.create(person)
// console.log(john)

//----------------------------------------------------------------typeof

// var a = 6
// console.log(typeof a)

// var b = []
// console.log(typeof b)

//-------------------------------------------------------------------use strict

// "use strict"
// person = {}
// console.log(person)

//------------------------------------------------------------------constructor function

// function greet(name, age){
//     this.name = name,
//     this.age = age
// }

// let greeting = new greet('atul', 'age')
// console.log(greeting)

//----------------------------------------------------------------fACTORY function

// function greet(name, age){
//     return {
//         name: name,
//         age: age,
//     }
// }

// console.log(greet('atul', '30'))

//----------------------------------------------------------------getter

// const person = {
//     fname: 'aaa',
//     lname: 'bbb',
//     get fullname(){ // getter
//         return this.fname + this.lname
//     },
//     set fullname(value){ // setter
        
//     }
// }

// console.log(person.fullname)

//---------------------------------------------------------------global vs local

// const message = 'hi'  // global
// console.log(message)

// {const message2 = 'hi'}  // local
// console.log(message2)

//--------------------------------------------------------------let vs var

// function print1(){
//     for(let i=0; i<5; i++){
//         console.log(i)
//     }
// }
// print1()

// function print2(){
//     for(var i=0; i<5; i++){
//         console.log(i)
//     }
// }
// print2()

//----------------------------------------------------------------check window

// var fname = 'sonu'  // creates on window
// let lname = 'sood'  // not on window

//-----------------------------------------------------------------cloning object (spread)

var p1 = {
    name: 'ooo'
}

let p2 = { ...p1 }
console.log(p2)








