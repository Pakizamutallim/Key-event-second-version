
// var a = 200
// function btnTop() {
//     const box = document.querySelector(".box"); 
//     const circle = document.querySelector(".circle");
//     circle.style.top = (a - 70) + "px" 
//     maxtop = "0"
// }

// function btnLeft() {
//     const box = document.querySelector(".box"); 
//     const circle = document.querySelector(".circle");
//     circle.style.left = (300-10) + "px"
// }


// function btnCenter() {
//     const box = document.querySelector(".box"); 
//     const circle = document.querySelector(".circle");
//     circle.style.top = "50" + "%"
//     circle.style.left = "50" + "%"
// }

// // var leftValue = 200
// function btnRight() {
//     const box = document.querySelector(".box"); 
//     const circle = document.querySelector(".circle"); 
//     // leftValue += 20
//     circle.style.left = (380 + 10) + "px"
//     // console.log(circle.style.left); 
// }

// function btnBottom() {
//     const box = document.querySelector(".box"); 
//     const circle = document.querySelector(".circle"); 
//     var i = 200 + 50
//     circle.style.top = (i) + "px" 
// }

window.onkeydown = function(event){

    const circle = document.querySelector(".circle");
    var top = circle.offsetTop 
    var left = circle.offsetLeft
    //asagidaki if-lerim 2beraberi 1 beraber edende isleyir. niyesini bilmirem :(   
    //hem de hansi if-i 1 beraber etmisemse o istiqamete gedir butun duymeleri basanda( 
    if (event.keycode == 37) {
        circle.style.left = (left-5)+"px"
        // console.log (keycode.value)
    }

    else if (event.keycode == 38) {
        circle.style.top=(top-5)+"px"
    }

    else if (event.keycode == 39) {
        circle.style.left=(left+5)+"px" 
    }

    else if (event.keycode == 40) {
        circle.style.top=(top+5)+"px"
    }
    
}







const sizeBox = document.getElementById("size-box"); 
const box = document.querySelector(".box")
sizeBox.value = box.style.width.value; 

const colorBox = document.getElementById("color-box"); 
colorBox.value = box.style.backgroundColor;




