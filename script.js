var time_sec=0;
var startpause1 = 0;
var startpause2 = 0;
var timer1=0;
var timer2=0;
var pause1=0;
var pause2=0;

function showMessage() {
    var x = document.getElementById("message");
    document.getElementById("message").innerHTML="Stopwatch Set to "+time_sec+" seconds..";
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function enableDisableSetButton(){
    if(startpause1==0 && startpause2==0){
        document.getElementById("setTimer").disabled = false;
        document.getElementById("setTimer").title = "Sets the time for stopwatch";
    }
    else{
        document.getElementById("setTimer").disabled = true;
        document.getElementById("setTimer").title = "Cannot set the time while stopwatch is running...";
    }
}

function setStopwatchTimers(){
    var secs =  document.getElementById("inputSec").value;
    if(secs!="" && !isNaN(secs)){
        reset1();
        reset2();
        time_sec = parseInt(secs);
        document.getElementById("t1").innerHTML = formatTime(time_sec);
        timer1 = time_sec;
        document.getElementById("t2").innerHTML = formatTime(0);
        timer2 = 0;
        showMessage();
    }else{
        alert("Please Enter a Valid Number of Seconds..");
        document.getElementById("inputSec").value = "";
    }
}

function formatTime(seconds){
    var days = Math.floor(seconds / (60 * 60 * 24));
    seconds -= days * (60 * 60 * 24);
    var hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * (60 * 60);
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    var str="";
    if(days>1)str += days + " days ";
    else if(days==1)str += "1 day ";
    if(hours>1)str += hours + " hours ";
    else if(hours==1)str += "1 hour ";
    if(minutes>1)str += minutes + " minutes ";
    else if(minutes==1)str += "1 minute ";
    if(seconds>1)str += seconds + " seconds ";
    else if(seconds==1)str += "1 second ";
    
    if(str=="")return "0 seconds";
    return str;
}

function reset1(){
    document.getElementById("t1").innerHTML = formatTime(time_sec);
    document.getElementById("start1").disabled = false;
    document.getElementById("down").style.backgroundColor = "coral";
    document.getElementById("t1").style.color = "black";
    startpause1=0;
    enableDisableSetButton();
    timer1 = time_sec;
}

function reset2(){
    document.getElementById("t2").innerHTML = formatTime(0);
    document.getElementById("start2").disabled = false;
    document.getElementById("up").style.backgroundColor = "lightblue";
    document.getElementById("t2").style.color = "black";
    startpause2=0;
    enableDisableSetButton();
    timer2 = 0;
}

function countUp(){
    timer2 = timer2+1;
    if(timer2==time_sec){
        document.getElementById("Resetbutton2").disabled = false;
        document.getElementById("start2").innerHTML = "Start";
        document.getElementById("start2").disabled = true;
        document.getElementById("up").style.backgroundColor = "lightblue";
        document.getElementById("t2").style.color = "yellow";
        document.getElementById("t2").innerHTML = "!! TIME UP !!";
        startpause2=0;
        enableDisableSetButton();
        return;
    }
    if(pause2==1)return;
    
    if(time_sec - timer2<10){
        if(timer2%2)
            document.getElementById("t2").style.color = "black";
        else
            document.getElementById("t2").style.color = "yellow";
    }
    else{
    if(timer2%2)
    document.getElementById("up").style.backgroundColor = "mistyrose";
    else
    document.getElementById("up").style.backgroundColor = "lightblue";
    }
    document.getElementById("t2").innerHTML = formatTime(timer2);
    setTimeout(function(){
        countUp();
    },1000);
}

function start_pause2(){
    if(startpause2==0){
        document.getElementById("Resetbutton2").disabled = true;
        document.getElementById("start2").innerHTML = "Pause";
        pause2=0;
        startpause2=1;
        countUp();
    }else{
        document.getElementById("Resetbutton2").disabled = false;
        document.getElementById("start2").innerHTML = "Start";
        pause2 = 1;
        startpause2=0;
    }
    enableDisableSetButton();
}

function countDown(){
    timer1 = timer1-1;
    if(timer1==0){
        document.getElementById("Resetbutton1").disabled = false;
        document.getElementById("start1").innerHTML = "Start";
        document.getElementById("start1").disabled = true;
        document.getElementById("down").style.backgroundColor = "coral";
        document.getElementById("t1").style.color = "yellow";
        document.getElementById("t1").innerHTML = "!! TIME UP !!";
        startpause1=0;
        enableDisableSetButton();
        return;
    }
    if(pause1==1)return;
        
    if(timer1<10){
        if(timer1%2)
            document.getElementById("t1").style.color = "black";
        else
            document.getElementById("t1").style.color = "yellow";
    }
    else{
        if(timer1%2)
            document.getElementById("down").style.backgroundColor = "lightgreen";
        else
            document.getElementById("down").style.backgroundColor = "coral";
    }
    document.getElementById("t1").innerHTML = formatTime(timer1);
    setTimeout(function(){
        countDown();
    },1000);
}

function start_pause1(){
    if(startpause1==0){
        document.getElementById("Resetbutton1").disabled = true;
        document.getElementById("start1").innerHTML = "Pause";
        pause1=0;
        startpause1=1;
        countDown();
    }else{
        document.getElementById("Resetbutton1").disabled = false;
        document.getElementById("start1").innerHTML = "Start";
        pause1 = 1;
        startpause1=0;
    }
    enableDisableSetButton();
}