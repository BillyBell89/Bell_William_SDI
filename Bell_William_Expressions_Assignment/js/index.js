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
var M = prompt ("Please enter the planets mass. (in kilograms)");
var m = prompt ("Please enter your mass. (in kilograms)");
var r = prompt ("Please enter your distance from the center of the planet. (in kilometers)");

var F = (M*m)/(r^2);


alert ("The gravitational force is "+ F + "!");
console.log("The gravitational force is "+ F + "!");















