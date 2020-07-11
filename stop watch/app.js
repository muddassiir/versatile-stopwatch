var msec=document.getElementById("msec");
var sec=document.getElementById("sec");
var min=document.getElementById("min");
var milisec=0;
var second=0;
var minutes=0;
var timer;

function timer(){
    milisec++
    msec.innerHTML=milisec;
    if(milisec >= 100){
        second++
        sec.innerHTML=second
        milisec=0
    }else if(second >= 5){
        minutes++
        min.innerHTML=minutes
        second=0
    }
}

function start(){
    timer=setInterval(timer,10);
}
function stop(){
    clearInterval(timer);
}
function reset(){
    msec.innerHTML=0;
    sec.innerHTML=0;
    min.innerHTML=0;
}