// DOM Elements
// const cursor = document.querySelector('.cursor');
// const hoverItems = document.querySelectorAll("a, button, .project, .service, .skill");



// Cursor
// let mouseX = 0;
// let mouseY = 0;

// let cursorX = 0;
// let cursorY = 0;

// document.addEventListener("mousemove",(e)=>{
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });

// function animateCursor(){
//     cursorX += (mouseX - cursorX) * 0.15;
//     cursorY += (mouseY - cursorY) * 0.15;
//     cursor.style.left = cursorX + "px";
//     cursor.style.top = cursorY + "px";
//     requestAnimationFrame(animateCursor);
// }

// animateCursor();
// // // document.addEventListener("mousemove",(e)=>{
// // //     cursor.style.left = e.clientX + "px";
// // //     cursor.style.top = e.clientY + "px";
// // // });

// hoverItems.forEach((item)=>{
//     item.addEventListener("mouseenter",()=>{
//         cursor.classList.add("cursor-hover");
//     });
//     item.addEventListener("mouseleave",()=>{
//         cursor.classList.remove("cursor-hover");
//     });
// });
//Double Cursor
const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");
let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;
// Dot follows instantly
document.addEventListener("mousemove",(e)=>{
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";
});
// Ring follows smoothly
function animateRing(){
    ringX += (mouseX-ringX)*0.15;
    ringY += (mouseY-ringY)*0.15;
    cursorRing.style.left = ringX+"px";
    cursorRing.style.top = ringY+"px";
    requestAnimationFrame(animateRing);
}
animateRing();
hoverItems.forEach(item=>{
    item.addEventListener("mouseenter",()=>{
        cursorRing.classList.add("cursor-grow");
    });
    item.addEventListener("mouseleave",()=>{
        cursorRing.classList.remove("cursor-grow");
    });
});
