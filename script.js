// var colorval = {blue:"#004FC6", green:"#00C800", red:"#E22626", yellow:"#ECC600"};
// colors=["blue","green","red","yellow"];
// const selector =["word","background","font"];

// var nameOf,colorOf,bgOf, counter=0, marks=1,selectOf;
// var timeoutseconds=Math.floor(Math.random() * (5000 - 2000) + 2000);
// console.log(timeoutseconds);

// nameOf=colors[Math.floor(Math.random() * 4)];
// document.getElementById("name").innerHTML = nameOf;

// colorOf = colors[Math.floor(Math.random() * 4)];
// while(colorOf==nameOf){
//     colorOf = colors[Math.floor(Math.random() * 4)];
// }
// bgOf = colors[Math.floor(Math.random() * 4)];
// while(bgOf==colorOf){
//     bgOf = colors[Math.floor(Math.random() * 4)];
// }
// console.log(bgOf);

// selectOf = selector[Math.floor(Math.random() * 3)];


// document.getElementById("name").style.color = colorval[colorOf];

// function right() {
//   counter+=Math.min(marks,5);
//   console.log(marks); marks++;
//        document.getElementById("score").innerHTML=counter;
//        document.getElementById("mark").innerHTML="+"+Math.min(marks,5);
//        console.log("YOUREEE RIGHT")
// }

// function wrong(){
//   document.getElementById("score").innerHTML=counter;
//       console.log("youre wrong lol"); 
//       alert("LOSER");
//       setTimeout(location.reload(),100);
// }

// function func(currColor){
//   if (this.counter<30) {
//     console.log(colorOf);
//     if(colorOf==currColor)
//       right();
//     else wrong();
//   }
  
//   else if(this.counter>30) {
//      if ((selectOf=="word" && currColor==nameOf) || (selectOf=="background" && currColor==bgOf) || (selectOf=="font" && currColor==colorOf)) right();
      
//      else wrong();
//   }
// }


// setInterval(function() {

//   nameOf=colors[Math.floor(Math.random() * 4)];
//   document.getElementById("name").innerHTML = nameOf;
//   marks=1;
  
//   timeoutseconds=Math.floor(Math.random() * (5000 - 2000) + 2000);
//   console.log(timeoutseconds);
//   while(colorOf==nameOf){
//       colorOf = colors[Math.floor(Math.random() * 4)];
//   }
//   document.getElementById("name").style.color = colorval[colorOf];
// //Level 2
//   if (counter>=10)
//   {
//     while(bgOf==colorOf){
//     bgOf = colors[Math.floor(Math.random() * 4)];
//   }
//     document.getElementById("name").style.backgroundColor = colorval[bgOf];
//   }
// // Level 3
//   if(counter>=30){
//       selectOf=selector[Math.floor(Math.random() * 3)];
//       console.log(selectOf);
//       document.getElementById("levelrule").innerHTML="Level 3: Tap on the "+selectOf+" color";

//   }

// }, timeoutseconds);

var colorval = {blue:"#004FC6", green:"#00C800", red:"#E22626", yellow:"#ECC600"};
colors=["blue","green","red","yellow"];
const selector =["word","background","font"];

var nameOf,colorOf,bgOf, counter=0, marks=1,selectOf,comparer;
var timeoutseconds=Math.floor(Math.random() * (5000 - 2000) + 2000);
console.log(timeoutseconds);

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
console.log(bgOf);

selectOf = selector[Math.floor(Math.random() * 3)];


document.getElementById("name").style.color = colorval[colorOf];

function right() {
  counter+=Math.min(marks,5);
  console.log(marks); marks++;
       document.getElementById("score").innerHTML=counter;
       document.getElementById("mark").innerHTML="+"+Math.min(marks,5);
       console.log("YOUREEE RIGHT");
}

function wrong(){
  document.getElementById("score").innerHTML=counter;
      console.log("youre wrong lol"); 
      alert("LOSER");
      // document.getElementById("player").style.display = "none";
      // document.getElementById("highscores").style.display = "block";
      // document.getElementById("final").innerHTML = counter;
      // sleep(1);
      setTimeout(location.reload(),5000);
}

function func(currColor){
 if (counter<30) {
    console.log(colorOf);
    if(colorOf==currColor) {right();}
      
    else {wrong();}
  }
  
  else if (counter>=30) {
    //  if ((selectOf=="word" && currColor==nameOf) || (selectOf=="background" && currColor==bgOf) || (selectOf=="font" && currColor==colorOf)) right();
   
      if(selectOf=="word"){  comparer=nameOf;}
      else if(selectOf=="background"){ comparer=bgOf;}
      else if(selectOf=="font") {comparer=colorOf;}
      console.log(comparer);
      if(comparer==currColor){ right();}
      else{ wrong();}

  }
}
// var fn=true;
// function once(fn) { 
//   if (fn) {
//     if(counter>=30){
//       alert("next level!");
//     }
//     fn=false;
//   }
// }

setInterval(function() {

  nameOf=colors[Math.floor(Math.random() * 4)];
  document.getElementById("name").innerHTML = nameOf;
  marks=1;
  
  timeoutseconds=Math.floor(Math.random() * (5000 - 2000) + 2000);
  console.log(timeoutseconds);
  while(colorOf==nameOf){
      colorOf = colors[Math.floor(Math.random() * 4)];
  }
  document.getElementById("name").style.color = colorval[colorOf];
//Level 2
  if (counter>=10)
  {
    while(bgOf==colorOf){
    bgOf = colors[Math.floor(Math.random() * 4)];
  }
    document.getElementById("name").style.backgroundColor = colorval[bgOf];
  }
// Level 3
  if(counter>=30){
      selectOf=selector[Math.floor(Math.random() * 3)];
      console.log(selectOf);
      document.getElementById("levelrule").innerHTML="Level 3: Tap on the "+selectOf+" color";

  }

}, timeoutseconds);

