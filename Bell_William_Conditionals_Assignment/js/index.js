//**Created by William Bell on 10/15/15.*//
//SDI Section 1

//Body mass index

weight = prompt ("What is your weight? (in Kilograms)");
height = prompt("What is your height? (in Meters)");
//don't accept empty or 0 variable
if(weight==""||weight=="0"){console.log("You must enter a weight!")}
else{
console.log("You entered a weight of "+ weight +" kilograms.")}

if(height==""||height=="0"){console.log("You must enter a height!")}
else{
    console.log("You entered a height of "+ height +" kilograms.")}
//conditional check for possible errors
if(height<=weight){console.log("Please recheck your inputs for accuracy.")}
else{
//ensure integers for variables
parseInt(weight);
parseInt(height)}
BMI = ((weight/height)/height);
console.log("Your body mass index is " + parseInt(BMI) + ".");




