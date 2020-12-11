var backgroundCSS = "",
  destination = document.querySelector("code"),
  body = document.querySelector("body"),
  colorInputs = document.querySelectorAll("input"),
  firstColor = document.getElementById("firstColor"),
  secondColor = document.getElementById("secondColor");

// Adding two event listeners of type input to the color pickers.
firstColor.addEventListener("input", update);
secondColor.addEventListener("input", update);

displayCSSBackground();

// Main function to create the string of CSS code and call the other 2 functions
function update() {
  backgroundCSS = `linear-gradient(to bottom right, ${firstColor.value},${secondColor.value})`;
  // displays the CSS code of the background
  destination.textContent = backgroundCSS;
  // Sets the CSS  of the body's background
  body.style.background = backgroundCSS;
}
