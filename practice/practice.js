//Closures
// function x(){
//     var a =7;
//     function y(){ 
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// //...
// z()

// function z(){
//     var b = 900;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();

// getName();
// console.log(x);
// console.log(getName);

// var x = 7;

//  function getName(){
//      console.log("Hello JavaScript");
//  }

//  var letter = "a";
//  var number = 1;

//  function testing(){
//      var number = 2;
//      console.log(number);
//      console.log(letter);
//      letter = "e";
//  }
// testing();
// console.log(number);
// console.log(letter);

//  testing ()

//  /*Write a JavaScript program to check two numbers and return 
//  true if one of the numbers is 100 or if the sum of the two numbers
//  is 100 */

//  const isEqualTo100 = (a,b) => a === 100 || b ===100
//  || (a + b) === 100; 

//  console.log(isEqualTo100(0, 100));
//  console.log(isEqualTo100(100, 0));

//  console.log(isEqualTo100(0, 10));
//  console.log(isEqualTo100(10, 0));

//  console.log(isEqualTo100(80, 20));
//  console.log(isEqualTo100(50, 50));

 /*A JavaScript program to get the extension of a filename*/

// const getFileExtension = (String) => String.slice
// (String.lastIndexOf('.'));

// console.log(getFileExtension("index.html"));

/* Write a program to replace every character in a given string
with the character following it in the alphabets*/

//String.fromCharCode--


//Conditionals...movie theater
//function movie(age){
// let movie = age => {
// if (age <= 12){
//     console.log("Watch Paw Patrol")
// }
// else if (age >= 13 && age <= 17){
//     console.log("Watch Frozen 2")
// }
// else{
//     console.log("Watch a Loud House")
// }
// }
// //}
// movie(15)

// //loops (for, while, do while)
// let numbers = values => {
//  for (var i=0; i<=values.length; i++){
//      console.log(values[i]+1)
//  }
// }
// numbers([122, 343, 565, 788]);

let vitamin = fruits =>{
    fruit=0
    while(fruit <= fruits.length){
        console.log(fruits[fruit])
        fruit++;
    }
}
vitamin(['mango','apple', 'orange', 'melon', 'pawpaw'])

// let names = name =>{
//     var letter = 0
//     do{
//     console.log(`Greetings ${name[letter]}`);
//     letter++
// }
// while(letter <= name.length)
// }
// names(['Wuanita', 'Wanjiku', 'Judy', 'Margaret'])

// //Anonymous function expression
// var name = function(x){
//     console.log(`Hello ${x}`)
// }
// ("Kenya")

// //Named function expression
// function jina(sirName, EnglName){
//     console.log("My name is "+ sirName)
// }
// jina("Githua", "Muthee")

// let a = "Hi"
// let greet = jina => {
// }
//   console.log(a + " " + jina);

// greet("Wanjiku")

// function greet()
// a = "Hello"

// let c = 40
// let values = ()=>{
//     var b = 20
// console.log(b+c)
// }
// values()
// console.log(b+c)

// let a = (temperature) =>{
//     if(temperature > 35){
//         let z = "Get tested"
//      console.log(z)
//     }
//     console.log(z)
// }
// a(40)

let parent = () =>{
    let x = "Welcome"
    let child = () =>{
        let y = "Home"
        console.log(x +" " + y)
    }
    child()
}
parent()