
// 1)Write a program to take input remaining fuel in the car (in liters) from the user. If the fuel is less than 0.25, display "Please refill the fuel in your car."

const userInput = prompt('Enter the remaining fuel in the car (in liters): ');
if(userInput < 0.25){
   console.log("Please refill the fuel in your car.") ;
   alert("Please refill the fuel in your car.")
}else{
    console.log("you have enough fuel");
    alert("you have enough fuel");
}

// 2)Run this script and check whether alert messages would be displayed or not (various conditions provided).

// 3)Write a program to take input marks obtained in three subjects and the total marks. Calculate the percentage and display the grade and remarks based on the percentage obtained.

const marks_in_maths = parseInt(prompt("Enter marks obtained in maths: "));
const marks_in_computer = parseInt(prompt("Enter marks obtained in Computer: "));
const marks_in_english = parseInt(prompt("Enter marks obtained in english: "));
const totalMarks = 30;

const totalObtained = marks_in_maths + marks_in_computer + marks_in_english;
const result = (totalObtained / totalMarks) * 100;
console.log("Your percentage is: ", result);
alert( result);

if(result > 40 && result <= 59){
    alert("Grade C");
}else if(result > 59 && result <= 69){
    alert("Grade B")
}else if(result >69 && result <= 79){
    alert("Grade A")
}else if(result > 79 && result <= 95){
    alert("Grade A+")
}else{
    alert("failed!!")
}

// 4)Initialize arrays with various data types (literalArr, stringArr, numberArr, boolArr, mixedArr, qualificationArr).
const litArray = [null, undefined, true, false]
const strArray = ["Book", "Apple", "Laptop"]
const numArray = [1,2,3,4,5]
const boolArray = [true, false]
const mixArray = [1, 'hello', true, null, { name: 'Sam' }]
const qualificationArray = ['Bachelor', 'Master', 'PhD']

// 5)Write a program to store phone manufacturers in an array.

const cellManufacturers = []

cellManufacturers.push("Apple");
cellManufacturers.push("Samsung");
cellManufacturers.push("OPPO");
cellManufacturers.push("Vivo");
document.write("Phone manufacturers: ", cellManufacturers, "<br><br>");
console.log(cellManufacturers);

// 6)Write a program to store student scores in an array and sort the array in ascending order using Array's sort method.
const stdScores = []

stdScores.push(80);
stdScores.push(60);
stdScores.push(55);
stdScores.push(78);
stdScores.push(45);
stdScores.push(56);
stdScores.push(76);
stdScores.push(69);
stdScores.push(64);
stdScores.push(72);

stdScores.sort()
document.write("Student scores in ascending order:", stdScores, "<br><br>")

// 7)Write a program to create a single string from the given array ["This", "is", "my", "cat"].

const array = ["This", "is", "my", "cat"];
const final = array.join(' ');
console.log("final string is :", final);
document.write("final string is :", final)

// 8)Implement the FIFO (First In First Out) approach using arrays.
const fifoArray = [];

fifoArray.push(10);
fifoArray.push(20);
fifoArray.push(30);

console.log(fifoArray);

// 9)// Implement the LIFO (Last In First Out) approach using arrays.

const lifoArray = [40, 50, 60]

lifoArray.shift();
console.log(lifoArray);

// 10)Write a program to enable "search by user input" in an array and prompt the user whether the item is found in the list or not.
const itemsList = ["mercedes", "corrola", "viper", "supra", "ferrari"]
const input = prompt("Enter any item to search: ");

function searchItem(input){
    for(const item of itemsList){
        if(item === input){
            return true;
        }
    }
    return false;
}

if(searchItem(input)){
    console.log("Item found")
}else {
    console.log("Item not found")
}

// 11)Write a program to identify the largest number in the given array.
const numbers = [10, 5, 25, 8, 15];

function findLargest(arr){
    if(arr.length === 0){
        console.log("No array found!!");
    }

    let largestNum = [0]
    for(let i=1; i<arr.length; i++){
        if(arr[i] > largestNum){
            largestNum = arr[i]
        }
    }
    return largestNum;
}

const LargestNumber = findLargest(numbers);
console.log("Largest Number is: ", LargestNumber)

// 12)Write a program to identify the smallest number in the given array.
const nums = [10, 5, 25, 8, 15];

function findSmallest(arr){
    if(arr.length === 0){
        console.log("No array found!!");
    }

    let smallestNum = [0]
    for(let i=1; i<arr.length; i++){
        if(arr[i] < smallestNum){
            smallestNum = arr[i]
        }
    }
    return smallestNum;
}

const smallestNumber = findSmallest(nums);
console.log("Smallest Number is: ", smallestNumber)

// 13)Write a program to print multiples of 5 ranging from 1 to 100.
const num = 5;
const multiples = [];

function findMultiples(num) {
  for (let i = 1; i <= 100; i++) {
    if (i % num === 0) {
      multiples.push(i); 
    }
  }
}

findMultiples(num); 
console.log("Multiples of 5 are:", multiples);

// Write a program that takes two numbers & adds them to a new variable. Show the result in your browser.
const num1=4
const num2=8
let sum;
function add(){
     sum = num1 + num2;   
}

add()
console.log("Sum of two variables is: ", sum )

// 14)Repeat task1 for subtraction, multiplication, division & modulus.
let subtraction;
function subtract(){
    subtraction = num1 - num2;
}

subtract();
console.log("Subtraction of two variables is: ", subtraction );

//multiplication
let multiplication;
function multiply(){
    multiplication = num1 * num2;
}

multiply();
console.log("Multiplication of two variables is: ", multiplication );

//division
let division;
function divide(){
    division = num1 / num2;
}

divide();
console.log("Division of two variables is: ", division );

//Modulus
let modulus;
function mod(){
    modulus = num1 % num2;
}

mod();
console.log("Modulus of two variables is: ", modulus );


//15) Write a program to take "city" name as input from the user. If the user enters "Karachi", welcome the user like this: "Welcome to the city of lights."

const cityName = prompt("Enter the city name: ");

if (cityName === "karachi") {
  alert("Welcome to the city of lights.");
} else {
  console.log("Welcome to " + cityName);
}


// 16)Write a program to take "gender" as input from the user. If the user is "Male," display "Good Morning Sir." If the user is "Female," display "Good Morning Ma'am."

const gender = prompt("enter your gender:  ");

if(gender === "male"){
    alert("Good Morning Sir.")
}else if(gender === "female"){
    alert("Good Morning Ma'am");
}else{
    alert("Hey Good Morning!");
}
//17) Write a program to take input color of the road traffic signal. If the color is "Red," display "Must Stop." If the color is "Yellow," display "Ready to move." If the color is "Green," display "Move now."
const signal = prompt("Enter the signal color name: ");

if(signal === "red"){
    alert("Must Stop!")
}else if(signal === "yellow"){
    alert("Ready to move!")
}else if(signal === "green"){
    alert("Move now!")
}else{
    alert("Enter a valid signal color name!!")
}