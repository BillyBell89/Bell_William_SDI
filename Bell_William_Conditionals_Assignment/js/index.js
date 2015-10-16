//**Created by William Bell on 10/15/15.*//
//SDI Section 1

//Body mass index
age = prompt ("What is your age?");
//exclude outliers
young = (age<20) ? "Too young":"Old enough";
old = (age>60) ? "Too old":"Young enough";
//outliers excluded
if(young=="Too young"){console.log("Body Mass Index is not a suitable indicator of health below the age of twenty.")}
else if(old=="Too old"){console.log("Body Mass Index is not a suitable indicator of health above age 60.")}

else{
    //get weight
weight = prompt ("What is your weight? (in Kilograms)");
    //get height
height = prompt("What is your height? (in Meters)");
//don't accept empty or 0 variable
if(weight==""||weight=="0"){console.log("You must enter a weight!")}
else{
console.log("You entered a weight of "+ weight +" kilograms.")}
//don't accept empty or 0 variable
if(height==""||height=="0"){console.log("You must enter a height!")}
else{
    console.log("You entered a height of "+ height +" meters.")}
//conditional check for possible errors
if((weight<=height)==true) {console.log("Please recheck your inputs for accuracy.")}
//ensure integers for variables
else {
    parseInt(weight);
    parseInt(height);
}
//calculate BMI
BMI = (weight/height)*(1/height);
//log result of calculation
console.log("Your body mass index is " + BMI + ".")
}
console.log("Results:I entered an age of 15 and got the message 'Body Mass Index is not a suitable indicator of health below the age of twenty.'");
console.log("Results:Age 25,Height 1.75 meters, Weight 150kg returned correct result of ~ 49");

