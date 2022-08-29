const wrapper = document.querySelector(".wrapper"),
  text = document.querySelector(".text"),
  textLabel = document.querySelector(".text-label"),
  colorBtn = document.querySelectorAll(".color-btn"),
  colorRandomBtn = document.querySelector(".color-btn-random"),
  colorAddBtn = document.querySelector(".color-btn-add");
// inputColor = document.querySelector(".input-color");

let colors = ["rgb(255, 151, 151)", "rgb(151, 255, 165)", "rgb(151, 196, 255)"];

colorRandomBtn.addEventListener("click", () => {
  let randomColor = Math.floor(Math.random() * colors.length);

  for (let i = 0; i < colorBtn.length; i++) {
    const thisColorBtn = colorBtn[i];

    wrapper.style.cssText = `background: ${colors[randomColor]};`;
    textLabel.style.cssText = `color: ${colors[randomColor]};`;
    text.style.cssText = `color: ${colors[randomColor]};`;
    thisColorBtn.style.cssText = `
      background: ${colors[randomColor]};
      color: ${colors[randomColor]};
    `;
  }

  text.innerText = `${colors[randomColor]}`;
});

colorAddBtn.addEventListener("click", () => {
  let inputColorValue = document.querySelector(".input-color").value;

  if (inputColorValue) {
    colors.push(inputColorValue);
    for (let i = 0; i < colorBtn.length; i++) {
      const thisColorBtn = colorBtn[i];

      wrapper.style.cssText = `background: ${inputColorValue};`;
      textLabel.style.cssText = `color: ${inputColorValue};`;
      text.style.cssText = `color: ${inputColorValue};`;
      thisColorBtn.style.cssText = `
    background: ${inputColorValue};
      color: ${inputColorValue};
      `;
    }
    inputColor.value = "";
  } else {
  }
});
