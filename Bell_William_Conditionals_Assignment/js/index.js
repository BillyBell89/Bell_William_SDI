//**Created by William Bell on 10/15/15.*//
//SDI Section 1

//Body mass index

weight = prompt ("What is your weight? (in Kilograms)");
height = prompt("What is your height? (in Meters)");
//don't accept empty variable
if(weight=""){console.log("You must enter a weight!")}
//don't accept 0
if(weight="0"){console.log("Weight cannot be zero!")}
else {
    parseInt(weight)
}
if(height=""){console.log("You must enter a Height!")}
if(height="0"){console.log("Height cannot be zero!")}
else {
    parseInt(height);
}
console.log(weight*height);


