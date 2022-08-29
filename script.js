const wrapper = document.querySelector(".wrapper"),
  text = document.querySelector(".text"),
  textLabel = document.querySelector(".text-label"),
  colorBtn = document.querySelectorAll(".color-btn"),
  colorRandomBtn = document.querySelector(".color-btn-random"),
  colorAddBtn = document.querySelector(".color-btn-add"),
  inputColor = document.querySelector(".input-color");

let colors = ["rgb(255, 151, 151)", "rgb(151, 255, 165)", "rgb(151, 196, 255)"];

colorRandomBtn.addEventListener("click", () => {
  let randomColor1 = Math.floor(Math.random() * 255);
  let randomColor2 = Math.floor(Math.random() * 255);
  let randomColor3 = Math.floor(Math.random() * 255);

  for (let i = 0; i < colorBtn.length; i++) {
    const thisColorBtn = colorBtn[i];

    wrapper.style.cssText = `background: rgb(${randomColor1},${randomColor2},${randomColor3});`;
    textLabel.style.cssText = `color: rgb(${randomColor1},${randomColor2},${randomColor3});`;
    text.style.cssText = `color: rgb(${randomColor1},${randomColor2},${randomColor3});`;
    thisColorBtn.style.cssText = `
      background: rgb(${randomColor1},${randomColor2},${randomColor3});
      color: rgb(${randomColor1},${randomColor2},${randomColor3});
    `;
  }

  text.innerText = `${colors[randomColor]}`;
});

colorAddBtn.addEventListener("click", () => {
  let inputColorValue = document.querySelector(".input-color").value;

  if (inputColorValue) {
    if (inputColorValue === "/cat") {
      wrapper.innerHTML = `
      <div class="gif" ><img src="cat.gif" alt=""></div>
      `;
    }

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
  }
});
