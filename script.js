const colors = [
  "rgb(255, 151, 151)",
  "rgb(151, 255, 165)",
  "rgb(151, 196, 255)",
];

const wrapper = document.querySelector(".wrapper"),
  text = document.querySelector(".text"),
  randomColorBtn = document.querySelector(".random-color-btn");

let randomColor = Math.floor(Math.random() * 3);

console.log(randomColor);

wrapper.style.cssText = `background: ${colors[randomColor]};`;
text.style.cssText = `color: ${colors[randomColor]};`;
randomColorBtn.style.cssText = `
  background: ${colors[randomColor]};
  color: ${colors[randomColor]};
`;
text.innerText = `${colors[randomColor]}`;
