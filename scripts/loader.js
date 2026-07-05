const lines = document.querySelectorAll(".line");
// const letterR = document.getElementById("letter-r");
// const letterJ = document.getElementById("letter-j");
const removeLetters = document.querySelectorAll(".remove .text");
const loaderName = document.getElementById("loader-name");
const removeContainer = document.querySelectorAll(".remove");
const loader = document.getElementById("loader");

const DRAW_TIME = 900;
const FADE_TIME = 500;
const MERGE_TIME = 500;

// function moveLettersTogether(){

//     const rRect = letterR.getBoundingClientRect();
//     const jRect = letterJ.getBoundingClientRect();

//     const rCenter =
//         rRect.left + rRect.width / 2;

//     const jCenter =
//         jRect.left + jRect.width / 2;

//     const middle = (rCenter + jCenter) / 2;

//     const gap = letterR.offsetWidth / 2; // Try 8–20 pixels

//     const rMove = (middle - gap) - rCenter;
//     const jMove = (middle + gap) - jCenter;

//     console.log({
//     rCenter,
//     jCenter,
//     middle,
//     rMove,
//     jMove
// });

//     letterR.style.transform =
//         `translateX(${rMove + 10}px)`;

//     letterJ.style.transform =
//         `translateX(${jMove + 10}px)`;

// }

function startLoader() {
  lines.forEach((line) => {
    line.style.width = "100%";
  });

  setTimeout(() => {
    removeLetters.forEach((letter) => {
      letter.style.opacity = "0";
      letter.style.filter = "blur(10px)";
      letter.style.transform = "translateY(-10px)";
    });

    // Hide the lines afterwards
    setTimeout(() => {
      lines.forEach((line) => {
        line.style.width = "0";
      });

      // Move R and J together
      setTimeout(() => {
        // moveLettersTogether();
        removeContainer.forEach((container) => {
          container.style.display = "none";
        });
        loaderName.style.gap = "0px";
        setTimeout(() => {
          loader.style.transform = "translateY(-100%)";
        }, 1500);
      }, MERGE_TIME);
    }, FADE_TIME);
  }, DRAW_TIME);
}

window.onload = () => {
  startLoader();
};
