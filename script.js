// In this challenge we'll use closures to create three buttons.
// Each button will represent a different color and we'll change the
// background color of the document body to the color value.
// Using a closure, create a function called changeColor that accepts a color value.
//  When the button is clicked, the closure should be invoked and the
//  body background color should be updated.

function changeColor(colorValue, buttonSelector) {
  const button = document.querySelector(buttonSelector);
  button.addEventListener("click", function () {
    document.body.style.background = colorValue;
    console.log(`Body background changed to: ${colorValue}`);
  });
}

changeColor("yellow", ".buttonClick1");
changeColor("pink", ".buttonClick2");
changeColor("blue", ".buttonClick3");
