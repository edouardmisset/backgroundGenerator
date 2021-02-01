const destination = document.querySelector("code"),
  body = document.querySelector("body"),
  colorInputs = document.querySelectorAll("input"),
  firstColor = document.getElementById("firstColor"),
  secondColor = document.getElementById("secondColor"),
  randomButton = document.getElementById("random");

let backgroundCSS = "";

// Adding two event listeners of type input to the color pickers.
firstColor.addEventListener("input", update);
secondColor.addEventListener("input", update);
randomButton.addEventListener("click", randomizer);

// Main function to create the string of CSS code and call the other 2 functions
function update() {
  backgroundCSS = `linear-gradient(to bottom right, ${firstColor.value},${secondColor.value})`;
  // displays the CSS code of the background
  destination.textContent = backgroundCSS;
  // Sets the CSS  of the body's background
  body.style.background = backgroundCSS;
}

function createRandomHEX() {
  let r, g, b;
  r = randomHEX();
  g = randomHEX();
  b = randomHEX();
  return `#${r}${g}${b}`;
}

function randomizer() {
  firstColor.value = createRandomHEX();
  secondColor.value = createRandomHEX();
  update();
}

const randomHEX = () => {
  let rand = Math.floor(Math.random() * 255).toString(16);
  rand.length === 1 ? (rand = `0${rand}`) : 1;
  return rand;
};
