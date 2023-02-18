const container = document.querySelector(".container");
for (let i = 0; i <= 100; i++) {
  const blocks = document.createElement("div");
  blocks.classList.add("blocks");
  container.appendChild(blocks);
}

// const colors = [
//   "#dbeafe",
//   "#a5f3fc",
//   "#bae6fd",
//   "#93c5fd",
//   "#4338ca",
//   "#7e22ce",
// ];

// const blocks = document.querySelector(".blocks");
// const setColors = () => {
//   blocks.style.background = "red";
// };

// setColors();

// var rgb = [];
// const setColors = () => {
//   for (var i = 0; i < 3; i++) {
//     rgb.push(Math.floor(Math.random() * 255));
//   }

//   blocks.style.backgroundColor = "rgb(" + rgb.join(",") + ")";
// };

const animateBlocks = () => {
  anime({
    targets: ".blocks",
    translateX: () => {
      return anime.random(-700, 700);
    },

    translateY: () => {
      return anime.random(-500, 500);
    },
    scale: () => {
      return anime.random(1, 5);
    },

    easing: "linear",
    duration: 3000,
    delay: anime.stagger(10),
    complete: animateBlocks,
  });
};

animateBlocks();
