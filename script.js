function autoplay(){
    var box=document.createElement("div");
    box.className="box";
}

function key(event) {          
    if (event.which == 13) {
        if(rw == 0){
            rw=setInterval(run,100);
            rs.play();
            bw=setInterval(b,50);
            bgs.play();
            fid=f();
            sw= setInterval(updateScore,100);
            fw = setInterval(move,80);
            
        }
        
        

    }
    if (event.which == 32) {
        if(jw == 0){
            clearInterval(rw);
            rw = -1;
            rs.pause();
            jw=setInterval(jump,100);
            js.play();
            
        }
    }
}

var rs=new Audio("run.m4a");
rs.loop=true;
var js=new Audio("jump.mp3");
var ds=new Audio("dead.mp3");
var bgs=new Audio("background_audio.mp3");
bgs.loop=true;
bgs.volume=0.3;
var es=new Audio("end.mp3");
es.loop=true;





var fid = 0;
var m = 600;
function f(){
    for (y = 0; y < 10; y++){
       var i=document.createElement("img");
       i.src="flame.gif";
       i.className="i";
       i.style.marginLeft=m+"px";
       m = m+500;
       i.id="a"+y;
       document.getElementById("b").appendChild(i);

    }
}
var fw = 0;
function move(){
    for (y = 0; y < 10; y++){
        var d = document.getElementById("a"+y);
        var z = getComputedStyle(d);
        var p = parseInt(z.marginLeft);
        p = p - 20;
        d.style.marginLeft = p +"px";
        // alert(p)   // 150--- -20
        if(p<=160 & p>=10){
            if(mt>=360){
            clearInterval(rw);
            rs.pause();
            clearInterval(jw);
            jw=-1;
            clearInterval(bw);
            bgs.pause();
            clearInterval(fw);
            clearInterval(sw);
            dw=setInterval(dead,100);
            ds.play();
        }
        
        }

    }

}
var sw = 0;
var s = 0;
function updateScore(){
    s = s + 1;
    document.getElementById("score").innerHTML=s;
    if (s > 205){
        clearInterval(rw);
             rs.pause();
             clearInterval(jw);
             jw=-1;
             clearInterval(bw);
             bgs.pause();
             clearInterval(fw);
             clearInterval(sw);
             document.getElementById("won").style.visibility="visible";
     }
}


var bw = 0;
var x = 0;
function b(){
    x = x - 10;
    document.getElementById("b").style.backgroundPositionX=x+"px";

}


var rw=0;
var r = 0;
function run() {
    r = r + 1;
    var rimg=document.getElementById("girl");
    if (r == 10){
        r = 0;
    }
    rimg.src="Run__00"+r+".png";
}

var mt=360;
var jw = 0;
var j = 0;
function jump(){
    var jimg=document.getElementById("girl");
    if(j<=4){
        mt=mt-30;
    }
    if(j>=5){
        mt=mt+30;
    }
    jimg.style.marginTop=mt+"px"

    j = j + 1;
    if (j == 10){
        j = 0;
    clearInterval(jw);
    jw = 0;
    rw=setInterval(run,100);
    rs.play();
    bgs.play();
    if(bw == 0){
        bw=setInterval(b,50);
    } 
    if(fid == 0){
        f();
    }
    if (fw ==0){
        fw=setInterval(move,80);
    }
    if (sw == 0){
        sw= setInterval(updateScore,100);
    }
    
    }
    
    
    
    jimg.src="Jump__00"+j+".png";
}

var dw = 0;
var d = 0;
function dead(){
    d = d + 1;
    var dimg= document.getElementById("girl");
    if(d == 10){
        d=9;
    }
    dimg.style.marginTop="310 px";
    dimg.src="Dead__00"+d+".png";
    document.getElementById("end").style.visibility="visible";
    document.getElementById("finalscore").innerHTML=s;
    document.getElementById("score").style.visibility="hidden";
    es.play();
}

function re(){
    location.reload();
}