/**
 * Created by BB on 10/2/15.
 */
//William Bell
//SDI Section 1

//Planning to calculate some value based on a planet's size

// test an unrelated program
    //    alert ("We are going to calculate the area of a rectangle.");
    //var L = prompt("Please enter the length.");
    //var W = prompt("Please enter the width.");
    //var H = prompt("Please enter the height.");

    //var area = (L * W * H);

// figure out how to display string and variable in same alert
    //not working WHY?
    //alert ("The area is " + area + ".");

//log the answer to the console
    //working
    //console.log("The area is " + area + ".");

//Actual Program to Run: Gravitational Force On Another Planet

//F=(Mm)/r^2
alert ("Let's calculate the gravitational force exerted on your body on a planet.");
//M is planet mass (larger mass)
var M = prompt ("Please enter the planets mass. (in kilograms)");
// m is users mass
var m = prompt ("Please enter your mass. (in kilograms)");
// r is distance from the center of large body of mass
var r = prompt ("Please enter your distance from the center of the planet. (in meters)");

var aray = ["1", "2" , "3"];
var numAray = parseInt(aray[1]);

// F represents force

var Force = (M*m)/(Math.pow (r, numAray));








alert ("The gravitational force is "+ Force + " kg^2/m!");
console.log("The gravitational force is "+ Force + " kg^2/m!");

console.log("I calculated M=10 m=10 r=5 and got the correct answer of 4");
console.log("I calculated M=5 m=5 r=5 and got the correct answer of 1");


















