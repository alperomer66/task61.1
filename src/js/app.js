import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

let hotInHere = document.querySelectorAll('.hot');
let text = hotInHere.textContent;
hotInHere.forEach(element => {
  if(!element.textContent.includes('🔥')){
  element.textContent += '🔥'
  }
  });
});
