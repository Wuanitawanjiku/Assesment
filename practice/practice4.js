//Functions - Block of code designed to perform certain task
//function that adds two numbers and prints the result
function add(){
var a = 3;
var b = 12;
var total = a+b;
console.log(total)
}
add();

function divNumber(c, d){
    var total = c/d;
    console.log("The division is : " + total)
}
divNumber(56, 7);

//you can also return functions
function mulNumber(a, b){
    var total = a*b;
    return total;    
}
var output = mulNumber(12,45);
console.log("The total is : " + output);

//Arrays
var cars = ['BMW', 'Volvo', 'Audi'];
cars.push('Benz');
for (i=0; i<cars.length; i++){
console.log(cars[i]);
}

//Objects
var Car = {
    car_brand: 'Tesla',
    car_model: 'Model 3',
    price: 35000,    
    teslaAutoPilot: function(){
        console.log('This car has auto pilot');
    }
}
Car.teslaAutoPilot();

//Function constructor
function Cars(car_brand, car_model, price){
    this.car_brand = car_brand;
    this.car_model = car_model;
    this.price = price;
    this.teslaAutoPilot = function(){
        console.log('Car is on autopilot');
}    }

var c1 = new Cars('Vitz', 'Model 4', 4500000);
var c2 = new Cars('Wish', 'Model 7', 10500000);
c1.teslaAutoPilot();
console.log(c2.car_model);


