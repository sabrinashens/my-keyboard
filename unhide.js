function unhideN() {
    var hid = document.getElementsByClassName("n");
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
    }
}
function unhideI() {
    var hid = document.getElementsByClassName("i");
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
    }
}
function unhideC() {
    var hid = document.getElementsByClassName("c");
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
    }
}
function unhideE() {
    var hid = document.getElementsByClassName("e");
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
    }
}
function unhideD() {
    var hid = document.getElementsByClassName("d");
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
    }
}
function unhideA() {
    var hid = document.getElementsByClassName("a");
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
    }
}
function unhideY() {
    var hid = document.getElementsByClassName("y");
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
    }
}

document.addEventListener("keydown", function(event){
   if(event.key === "n"){
     document.querySelector('button[type="N"]').click();
   } 
});
document.addEventListener("keydown", function(event){
   if(event.key === "i"){
     document.querySelector('button[type="I"]').click();
   } 
});
document.addEventListener("keydown", function(event){
   if(event.key === "c"){
     document.querySelector('button[type="C"]').click();
   } 
});
document.addEventListener("keydown", function(event){
   if(event.key === "e"){
     document.querySelector('button[type="E"]').click();
   } 
});
document.addEventListener("keydown", function(event){
   if(event.key === "d"){
     document.querySelector('button[type="D"]').click();
   } 
});
document.addEventListener("keydown", function(event){
   if(event.key === "a"){
     document.querySelector('button[type="A"]').click();
   } 
});
document.addEventListener("keydown", function(event){
   if(event.key === "y"){
     document.querySelector('button[type="Y"]').click();
   } 
});