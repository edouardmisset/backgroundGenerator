var backgroundCSS = "",
  destination = document.querySelector("p"),
  body = document.querySelector("body"),
  colorInputs = document.querySelectorAll("input"),
  firstColor = document.getElementById("firstColor").value,
  secondColor = document.getElementById("secondColor").value,
  sourceElement = "";

function addingListeners() {
  colorInputs.forEach((element) => {
    element.addEventListener("input", update);
    element.addEventListener("change", update);
  });
}

addingListeners();
displayCSSBackground();

function update(event) {
  sourceElement = event.target;

  console.log(
    "🚀 ~ file: script.js ~ line 17 ~ update ~ genericColor",
    sourceElement
  );

  if (sourceElement === colorInputs[0]) {
    firstColor = sourceElement.value;
  } else if (sourceElement === colorInputs[1]) {
    secondColor = sourceElement.value;
  } else {
    return 0;
  }

  displayCSSBackground();
  setBackgroundColors();
}

function displayCSSBackground() {
  backgroundCSS = `linear-gradient(to bottom right, ${firstColor},${secondColor})`;
  destination.textContent = backgroundCSS;
}

// Create a function to set the CSS property "background" = linear-gradient(to bottom right, firstColor, secondColor)
function setBackgroundColors() {
  body.style.background = `linear-gradient(to bottom right, ${firstColor},${secondColor})`;
}
