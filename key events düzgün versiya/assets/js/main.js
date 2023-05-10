const box = document.querySelector(".box");
const circle = document.querySelector(".circle");

var top1 = circle.offsetTop; 
var left1 = circle.offsetLeft; 
var a = 20; 

function btnTop() {
    if (top1 > a) {
        top1 -= a;
        circle.style.top =  top1 + "px" 
    }
}

function btnLeft() {
    if (left1 > a) {
        left1 -= a;  
        circle.style.left = left1 + "px"         
    }
}

function btnRight() {
    var x = box.offsetWidth - circle.offsetWidth - a
    if (left1 < x) {
        left1 += a
        circle.style.left = left1 + "px" 
    }
}

function btnBottom() {
    var y = box.offsetHeight - circle.offsetHeight - a
    if (top1 < y) {
        top1 +=a
        circle.style.top = top1 + "px" 
    }   
}

// function btnCenter() {
//     const box = document.querySelector(".box"); 
//     const circle = document.querySelector(".circle");
//     circle.style.top = "50" + "%"
//     circle.style.left = "50" + "%"
// }



window.onkeydown = function(event){
    
    const circle = document.querySelector(".circle");
    var top = circle.offsetTop 
    var left = circle.offsetLeft
    //asagidaki if-lerim 2beraberi 1 beraber edende isleyir. niyesini bilmirem :(   
    //hem de hansi if-i 1 beraber etmisemse o istiqamete gedir butun duymeleri basanda( 
    if (event.keyCode == 37) {
        circle.style.left = (left-5)+"px"
        // console.log (keycode.value)
    }

    else if (event.keyCode == 38) {
        circle.style.top=(top-5)+"px"
    }

    else if (event.keyCode == 39) {
        circle.style.left=(left+5)+"px" 
    }

    else if (event.keyCode == 40) {
        circle.style.top=(top+5)+"px"
    }
}

const save = document.getElementById("btnSave") 
save.addEventListener ("click", function(){
    
})


const sizeBox = document.getElementById("size-box").value + "px"; 
sizeBox = box.offsetwidth.value; 

const colorBox = document.getElementById("color-box"); 
colorBox.value = box.style.backgroundColor;




