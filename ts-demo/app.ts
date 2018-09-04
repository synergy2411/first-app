
// function longRunningOperation(){
//     setTimeout(function(){
//         console.log("Running...");
//     }, 2000);
// }
// function webRequest(req){
//     console.log("Starting the operation #", req.id );
//     longRunningOperation();
//     console.log("Ending the operation #", req.id );
// }
// webRequest({id : 1});
// webRequest({id : 2});

//Destructuring : Arrays / Objects

// var arr = ["Foo", "Bar","Bam"];

// var [arr1, arr3] = arr;

// console.log(arr3);  //Bam

// var myModule = {
//     drawCircle : function(r){return Math.PI * r * r},
//     drawText : function(text){return "Drawing " + text}
// }

// var {drawText, drawCircle} = myModule;

// console.log(drawText("Sample Text!"));

//Template String Syntax : 
    // - Multiline String
    // - including variables

    // var fname = "Foo";

    // console.log(`Hello ${fname}`);

//Block level scoping
    // - let
    // - const

    // function demo(arr){
    //     if(arr.length > 2){
    //         let flash = "Flashing";
    //         console.log(load);      //undefined
    //     }else{
    //         let load = "Loading";
    //     }
    // }
    // demo([2,3,4,5]);


    // function mystery(){
    //     var chooseNumber = function (){
    //         return 7;
    //     }
    //     return chooseNumber();
    //     var chooseNumber = function (){
    //         return 12;
    //     }
    // }
    // console.log(mystery());     //?


//Spread & Rest Operators (...)
// function demo(param1, ...args){
//     console.log(args[1]);   //?
// }

// // demo("foo");
// // demo("foo", "bar");
// demo("foo", "bar", "bam", true, 100);

// var arr = [2,3,4];
// var newArr = [1, ...arr, 5,6];
// console.log(newArr);    //?


//Arrow Function

// let arr = [1,2,3,4,5];
// // var newArr = arr.map(function(value, index, array){
// //     return value * 2;
// // });
// var newArr = arr.map((value, index, array)=> value * 2);

// console.log(newArr);

// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         // return this.firstName + " " + this.lastName; 
//         // function nestedFunc(){
//         //     console.log(this);      //global Object
//         //     return this.firstName + " " + this.lastName;
//         // }
//         var nestedFunc = ()=>{
//             return this.firstName + " " + this.lastName;
//         }
//         return nestedFunc();
//     }
// }

// console.log(user.getFullName());        //?

//Class
//Module
// import { Student } from './student';
// import { Person } from './person';

// // let foo = new Student("Foo", "Bar", 32);
// var myObj : Person = {
//     firstName : "Bar",
//     lastName : "Bam",
//     age : 32
// } 
// let bar = new Student(myObj);
// console.log(bar.getFullName());


// class Foo{}
// class Bar{}

// class Bam{
//     foo1 = new Foo();
//     constructor(private foo : Foo, bar : Bar){}
//     demo(){
        
//     }
// }
// let bam = new Bam(new Foo(), new Bar());


//Decorators : 

// @Component()

//npm install -g @angular/cli