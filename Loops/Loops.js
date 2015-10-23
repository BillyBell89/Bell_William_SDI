/**
 * Created by BB on 10/22/15.
 */
var total =  calcArea(30,20);

function calcArea(w, h){
    var area = w * h;
    console.log(area)
    return area;
}

var calcArea = function(width,height){
    var area=width*height;
    return area;
}

var a = calcArea(20,30);

function dogYears(age){//parameter
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.")
}

dogYears(4);//argument

//while loop
var b = 10; //sets up index

while (b>0){ //checks condition
    console.log(b + ' kegs on the wall');
    b--; //decrements index
}

//do while
var c=10;
do{
    console.log(c + ' kegs on the wall');
    c--;
}
while (c>0);

//for loop
for (var i = 10; i > 0; i --){
    console.log(i + ' kegs on the wall')

}