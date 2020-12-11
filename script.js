var backgroundCSS = "",
  destination = document.querySelector("code"),
  body = document.querySelector("body"),
  colorInputs = document.querySelectorAll("input"),
  firstColor = document.getElementById("firstColor").value,
  secondColor = document.getElementById("secondColor").value;

// Add event listeners for "input" and "change" events to the inputs
function addingListeners() {
  colorInputs.forEach((element) => {
    element.addEventListener("input", update);
    element.addEventListener("change", update);
  });
}

addingListeners();
displayCSSBackground();

/**
 * @description Main function : set the background colors and displays the CSS code
 * @date 11/12/2020
 * @param {*} event
 * @return {*}
 */
function update(event) {
  // If the first/secind input is selected then set the first/second color. else nothing
  // TODO: simplify. Not very elegant...
  if (event.target === colorInputs[0]) {
    firstColor = event.target.value;
  } else if (event.target === colorInputs[1]) {
    secondColor = event.target.value;
  } else {
    return 0;
  }

  displayCSSBackground();
  setBackgroundColors();
}

/**
 * @description Sets the CSS code for the backgroun in the paragraph
 * @date 11/12/2020
 */
function displayCSSBackground() {
  buildCSSString();
  destination.textContent = backgroundCSS;
}

/**
 * @description Builds the string of the CSS background property
 * @date 11/12/2020
 */
function buildCSSString() {
  backgroundCSS = `linear-gradient(to bottom right, ${firstColor},${secondColor})`;
}

// Sets the CSS property "background" = linear-gradient(to bottom right, firstColor, secondColor)
function setBackgroundColors() {
  body.style.background = buildCSSString();
}
