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

//var whichLotto = prompt ('Which lotto would you like numbers for? (Type "Florida" or "Powerball"');

//if (whichLotto=="Florida"){console.log("Florida")}
//if (whichLotto=="Powerball"){console.log("Powerball")}

//while(whichLotto!="Florida" || whichLotto) {prompt('Which lotto would you like numbers for? (Type "Florida" or "Powerball"')}

//function calcArea(w, h) {
  //  var area = w * h;
  //  console.log(area);
  //  return area;
//}
//var a = calcArea(20,30);

//function powerBall(P1,P2,P3,P4,P5,PB){
//}

var whichLotto = prompt("Which lottery numbers would you like to retrieve?('Florida', 'Powerball', or 'Both'");

if (whichLotto!="Florida"&&whichLotto!="Powerball"&&whichLotto!="Both"){prompt("Which lottery numbers would you like to retrieve?('Florida', 'Powerball', or 'Both'")}

//Create function to pull lotto numbers and print them to console
else {
    if (whichLotto == "Florida" || whichLotto == "Both") {
        function flLotto(F1, F2, F3, F4, F5, F6) {
            if ([F1 != F2 || F3 || F4 || F5 || F6] && [F2 != F3 || F4 || F5 || F6] && [F3 != F4 || F5 || F6] && [F4 != F5 || F6] && [F5 != F6]) {
                console.log("Florida lotto numbers are " + F1 + ", " + F2 + ", " + F3 + ", " + F4 + ", " + F5 + ", and the final number is " + F6)
            }
        }

//create arguments using math.floor,math.random to generate numbers up to 54

        flLotto((Math.floor(Math.random() * 53) + 1), (Math.floor(Math.random() * 53) + 1), (Math.floor(Math.random() * 53) + 1),
            (Math.floor(Math.random() * 53) + 1), (Math.floor(Math.random() * 53) + 1), (Math.floor(Math.random() * 53) + 1));
    }
//Create function to pull powerball lotto numbers and print them to console
    if (whichLotto == "Powerball" || whichLotto == "Both") {
        function pbLotto(P1, P2, P3, P4, P5, PB) {
            if ([P1 != P2 || P3 || P4 || P5] && [P2 != P3 || P4 || P5] && [P3 != P4 || P5] && [P4 != P5]) {
                console.log("Powerball lotto numbers are " + P1 + ", " + P2 + ", " + P3 + ", " + P4 + ", " + P5 + ", and the powerball is " + PB)
            }
        }

//create arguments using math.floor,math.random to generate numbers up to 59, PB up to 35

        pbLotto((Math.floor(Math.random() * 59) + 1), (Math.floor(Math.random() * 59) + 1), (Math.floor(Math.random() * 59) + 1),
            (Math.floor(Math.random() * 59) + 1), (Math.floor(Math.random() * 59) + 1), (Math.floor(Math.random() * 35) + 1))
    }
}
