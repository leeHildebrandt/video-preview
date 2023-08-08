console.log("page loaded...");
var x = document.getElementById("myVideo"); 

function playVid() { 
    x.play(); 
} 
function pauseVid() { 
    x.pause(); 
}
function enableMute() { 
    x.muted = true;
}
function disableMute() { 
    x.muted = false;
}
function checkMute() { 
    alert(x.muted);
} 