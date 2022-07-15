
// GLOBAL VARIABLES
import {save} from "/firebase.js";


var colorval = {blue:"#004FC6", green:"#00C800", red:"#E22626", yellow:"#ECC600"};
var colors=["blue","green","red","yellow"];
const selector =["word","background","font"];

var nameOf,colorOf,bgOf, counter=0, marks=1,selectOf,comparer;
var timeoutseconds=Math.floor(Math.random() * (4000 - 2000) + 2000);
// timeoutseconds=200;

// GAME ELEMENT CODE WHICH ENSURES COLORS DO NOT REPEAT

nameOf=colors[Math.floor(Math.random() * 4)];
document.getElementById("colorname").innerHTML = nameOf;

colorOf = colors[Math.floor(Math.random() * 4)];
while(colorOf==nameOf){
    colorOf = colors[Math.floor(Math.random() * 4)];
}
bgOf = colors[Math.floor(Math.random() * 4)];
while(bgOf==colorOf){
    bgOf = colors[Math.floor(Math.random() * 4)];
}

selectOf = selector[Math.floor(Math.random() * 3)];


document.getElementById("colorname").style.color = colorval[colorOf];

// document.getElementById("playerdetails").style.visibility = block;

// WHEN PLAYER CLICKS RIGHT OPTION
function right() {
  counter+=Math.min(marks,5);
  marks++;
       document.getElementById("score").innerHTML=counter;
       document.getElementById("mark").innerHTML="+"+Math.min(marks,5);
}


 // WHEN PLAYER CLICKS WRONG ANSWER
 function wrong() {

  document.getElementById("score").innerHTML = counter;
  window.counter = counter;
  document.getElementById("player").style.display="none";
  document.getElementById("finalscores").style.visibility="visible";
  document.getElementById("currname").innerHTML = "Player Name: " + namebox ;
  document.getElementById("currscore").innerHTML = "Your Score: " + counter;


  // var userName = alert("Better luck next time! Please drop your name!");
       save();
  // setTimeout(location.reload(), 5000);
}


// CHECKER OF RESPONSE FUNCTION
function func(currColor){
 if (counter<100) {
    if(colorOf==currColor) {right();}
      
    else {wrong();}
  }
  
  else if (counter>=100) {
      
      if(selectOf=="word"){  comparer=nameOf;}
      else if(selectOf=="background"){ comparer=bgOf;}
      else if(selectOf=="font") {comparer=colorOf;}
      if(comparer==currColor){ right();}
      else{ wrong();}

  }
}

var namebox;

// GAME STARTER 
function startgame(){
if(document.getElementById("playername").value == ""){
  alert(" ENTER NAME ");
}
else{
  namebox = document.getElementById("playername").value;
  window.namebox = namebox;
  document.getElementById("start").style.display="none";
  document.getElementById("rules").style.display="none";
  document.getElementById("player").style.display="block";
}
}
var nameOfdup,colorOfdup,bgOfdup,selectOfdup;

// GAME DRIVER FUNCTION WHICH USES SET INTERVAL TO SWITCH COLORS

setInterval(function() {
//Level 1
  nameOf=colors[Math.floor(Math.random() * 4)];
  while(nameOf==nameOfdup){
    nameOf=colors[Math.floor(Math.random() * 4)];
  }
  nameOfdup=nameOf;
  document.getElementById("colorname").innerHTML = nameOf;
  marks=1;
  
  timeoutseconds=Math.floor(Math.random() * (4000 - 2000) + 2000);
  while(colorOf==nameOf || colorOf==colorOfdup){
      colorOf = colors[Math.floor(Math.random() * 4)];
  }
  colorOfdup=colorOf;
  document.getElementById("colorname").style.color = colorval[colorOf];
//Level 2
  if (counter>=50)
  {
    while(bgOf==colorOf || bgOf==bgOfdup){
    bgOf = colors[Math.floor(Math.random() * 4)];
  }
  bgOfdup=bgOf;
    document.getElementById("colorname").style.backgroundColor = colorval[bgOf];
    document.getElementById("levelrule").innerHTML="Level 2: Tap on the font color! More taps mean more points. But hurry before the color changes";
  }
// Level 3
  if(counter>=100){
      selectOf=selector[Math.floor(Math.random() * 3)];
      while(selectOf==selectOfdup){
        selectOf=selector[Math.floor(Math.random() * 3)];
    }
    selectOfdup=selectOf;
      document.getElementById("levelrule").innerHTML="Level 3: Tap on the "+selectOf+" color";

  }

}, timeoutseconds);

window.startgame = startgame;
window.wrong = wrong;
window.right = right;
window.func = func




