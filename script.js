var colorval = {blue:"#004FC6", green:"#00C800", red:"#E22626", yellow:"#ECC600"};
colors=["blue","green","red","yellow"];
const selector =["word","background","font"];

var nameOf,colorOf,bgOf, counter=0, marks=1,selectOf,comparer;
var timeoutseconds=Math.floor(Math.random() * (5000 - 2000) + 2000);

nameOf=colors[Math.floor(Math.random() * 4)];
document.getElementById("name").innerHTML = nameOf;

colorOf = colors[Math.floor(Math.random() * 4)];
while(colorOf==nameOf){
    colorOf = colors[Math.floor(Math.random() * 4)];
}
bgOf = colors[Math.floor(Math.random() * 4)];
while(bgOf==colorOf){
    bgOf = colors[Math.floor(Math.random() * 4)];
}

selectOf = selector[Math.floor(Math.random() * 3)];


document.getElementById("name").style.color = colorval[colorOf];

function right() {
  counter+=Math.min(marks,5);
  marks++;
       document.getElementById("score").innerHTML=counter;
       document.getElementById("mark").innerHTML="+"+Math.min(marks,5);
}

function wrong(){
  document.getElementById("score").innerHTML=counter;
      alert("Better luck next time! Try again!");
      setTimeout(location.reload(),5000);
}

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


setInterval(function() {
//Level 1
  nameOf=colors[Math.floor(Math.random() * 4)];
  document.getElementById("name").innerHTML = nameOf;
  marks=1;
  
  timeoutseconds=Math.floor(Math.random() * (4000 - 2000) + 2000);
  while(colorOf==nameOf){
      colorOf = colors[Math.floor(Math.random() * 4)];
  }
  document.getElementById("name").style.color = colorval[colorOf];
//Level 2
  if (counter>=50)
  {
    while(bgOf==colorOf){
    bgOf = colors[Math.floor(Math.random() * 4)];
  }
    document.getElementById("name").style.backgroundColor = colorval[bgOf];
    document.getElementById("levelrule").innerHTML="Level 2: Tap on the font color! More taps mean more points. But hurry before the color changes";
  }
// Level 3
  if(counter>=100){
      selectOf=selector[Math.floor(Math.random() * 3)];
      document.getElementById("levelrule").innerHTML="Level 3: Tap on the "+selectOf+" color";

  }

}, timeoutseconds);

