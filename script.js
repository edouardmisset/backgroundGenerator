var backgroundCSS = "",
  destination = document.querySelector("code"),
  body = document.querySelector("body"),
  colorInputs = document.querySelectorAll("input"),
  firstColor = document.getElementById("firstColor"),
  secondColor = document.getElementById("secondColor"),
  randomButton = document.getElementById("random");

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
  var r, g, b, hex;

  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  // FIXME: the hex values are sometimes 1 digit which causes invalid Hex colors (5 hex digits when it should be 6). How to fix that ?
  hex = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  return hex;
}

function randomizer() {
  firstColor.value = createRandomHEX();
  secondColor.value = createRandomHEX();

  update();
}
