document.querySelector("#no button").addEventListener("click",function(){
  // document.querySelector(".bubble").style.opacity=1
  document.querySelector("#no").style.top="-100%"
  myFunc()
})
function myFunc(){

var hitNum;
var score=0;
var rn;
function handleTimer(){
  var timer=60;
    setInterval(function(){
             if(timer>0){
                timer--;
                document.querySelector("#timer").textContent=timer
             }
             else{
                document.querySelector("#btm").innerHTML=`<h1>Game Over 😓 <br> Your score is <br> <span> ${score}</span> </h1>`
             }
    },1000)
   
}

function getHit(){
  hitNum=Math.floor(Math.random()*10)
  document.querySelector("#hitdiv").textContent=hitNum
}

function increaseScore(){
  score=score+10;
  document.querySelector("#score").textContent=score
}

function makeBubble(){
    document.querySelector("#btm").innerHTML=""
    for(var i=1;i<134;i++){
        rn=Math.floor(Math.random()*10)
        document.querySelector("#btm").innerHTML+=`<div class=bubble>${rn}</div>`
    }
}

function handleBubble(){
    document.querySelector("#btm").addEventListener("click",function(dets){
       if(Number(dets.target.textContent) == hitNum){
        increaseScore();
        getHit();
        makeBubble();
       }
    })
}
getHit()
handleTimer()
makeBubble()
handleBubble()
}