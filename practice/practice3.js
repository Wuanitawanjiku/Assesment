//Function expressions
//Methods
let student = {
    name : 'Brenda',
    age : 22,
    school : 'AkiraChix',
    welcome : function (){
        console.log(`Hello ${student.name} aged ${student.age} welcome ${student.school}`);
    }
}
student.welcome();
student['Hobby'] = 'Swimming';
console.log(student);
student.leisure = 'Tourism';
console.log(student);
student.leisure = 'Swimming';
console.log(student);
delete student.Hobby;
console.log(student);

//Arrow function 

let y =
    size => {console.log(`You wear shoe size ${size}`);
} 
y(5);

let x = (size, color) =>{
    if (color == 'Red'){
        console.log("I don't want");
    }
    else {
        console.log(`I'll take size ${size}`)
    }
}
x(2, 'Red');

(()=>console.log('Jason'))
();

((a, b) => console.log(a%b))
(35, 5);

//If
function grade(marks){
    if (marks < 50){
        console.log('D');
    }
    else{
        console.log('A or B or C')
    }
}
grade(80);
grade(45);


//Else if
function test(grade){
    if (grade < 30){
        console.log ('D');
    }
    else if (grade >= 31 && grade < 50){
        console.log ('C+')
    }
    else if (grade >= 51 && grade < 70){
        console.log ('C+')
    }
    else {console.log('A');}
}
test(55);
test(98);

//Switch
function switchTv (score) {
    switch (score) {
        case 50:
            console.log('C');            
            break;
            case 70:
                console.log('B');
            break;
            case 90:
                console.log('A');     
        break;
        default:
            console.log('A');
}
}switchTv(74);

//Ternary
function Ternary(sum){
    let grades = (sum >= 50)? 'Pass':'Fail';
    console.log(grades);
}
Ternary(76);

//for loops
function groceries(veggies){
    for (veg in veggies){
        console.log(veggies[veg]);
    }
}
groceries(['Apples', 'Dhania', 'Ovacado']);

//for loops used when number of iterations is known in advance
var pupil = {
    name: 'Wuanita',
    age: 19,
    hair: 'Black'
}
for (key in pupil){
    console.log(`${pupil[key]}`)
}

//Multiplication table of 8 using for loop
for (x=1;x <=10;x++){
    // console.log(5*x);
    console.log(8*x);
}

//First 5 even numbers
var w =2
for (;w<20;w+=2){
    console.log(w);
}

//while loop
//Print first 5 odd numbers
var c =1
while(c<25){
    console.log(c);
    c=c+2;  //to avoid it running to infinite 
}

//do while loop is an exit control statement
var d = 8;
do{
    console.log("JS");
    d--;
}while(d>5);

