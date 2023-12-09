
var timer = 60;
var score = 0;
var RandomNo;

let Output = document.querySelector("#Output-Box");
let instruct = document.querySelector("#instu");

function IncreaseScore(){
    score+= 10;
    document.querySelector("#ScoreVal").textContent = score;
}

function HitBubble(){
    RandomNo = Math.floor(Math.random()*10);
   document.querySelector("#Hitval").textContent = RandomNo;
}

function CreateBubble(){
    clutter = "";
    for(var i=0; i<=89; i++){
        let Cb = Math.floor(Math.random()*10);
        clutter += `<div id="bubble">${Cb}</div>`;
    }

document.querySelector("#btm").innerHTML = clutter;

}

function StartTimer(){
    var TimeInt =  setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timer").textContent = timer;
        if(timer<=5){
            var time = document.querySelector("#timer")
            time.textContent = timer;
            time.style.color = 'red';
        }
        }else{
            document.querySelector("#btm").innerHTML = `<h1>Game Over!!</h1>`;
            clearInterval(TimeInt);
            instruct.innerHTML = `You Have Scored ${score} Points`;
        }
    },1000);
}

document.querySelector("#btm").addEventListener("click",function(details){
      var numclicked = (Number(details.target.textContent));
      
      if(RandomNo === numclicked){
          CreateBubble();
          HitBubble();
          IncreaseScore()
      }
})

document.querySelector("#Start").addEventListener("click",function(dets){
    console.log(dets.target.textContent)
    CreateBubble();
    StartTimer();
    HitBubble();  
})


