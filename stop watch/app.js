var msec=document.getElementById("msec");
var sec=document.getElementById("sec");
var min=document.getElementById("min");
var milisec=0;
var second=0;
var minutes=0;
var interval;

function timer(){
    milisec++
    msec.innerHTML=milisec;
    if(milisec >= 100){
        second++
        sec.innerHTML=second;
        milisec=0;
    }else if(second >= 60){
        minutes++
        min.innerHTML=minutes;
        second=0;
    }
}
var btn=document.getElementById('start');
var startbtn=btn.querySelector('button')
function start(){
    interval=setInterval(timer,10)
    document.getElementById("Button").disabled = true;
}
function stop(){
    clearInterval(interval)
    document.getElementById("Button").disabled = false;
}
function reset(){
    msec.innerHTML=0;
    sec.innerHTML=0;
    min.innerHTML=0;
    stop()
}