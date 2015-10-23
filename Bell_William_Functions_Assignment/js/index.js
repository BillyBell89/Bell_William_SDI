/**
 * Created by BB on 10/22/15.
 */
//William Bell
//SDI Section 1

//var diceThrow;
//for (var throwCount = 0; throwCount < 10; throwCount++){
    //diceThrow = (Math.floor(Math.random() * 6) + 1);
    //console.log(diceThrow);
//}

var whichLotto = prompt ('Which lotto would you like numbers for? (Type "Florida" or "Powerball"');

if (whichLotto=="Florida"){console.log("Florida")}
if (whichLotto=="Powerball"){console.log("Powerball")}

while(whichLotto!="Florida" || whichLotto) {prompt('Which lotto would you like numbers for? (Type "Florida" or "Powerball"')}

function calcArea(w, h){
    var area = w * h;
    console.log(area)
    return area;


