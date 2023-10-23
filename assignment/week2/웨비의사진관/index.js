const topBtn = document.getElementById("top_btn");
const height = document.querySelector("body");

document.addEventListener('scroll', ()=>{
  let scrollPosition = window.scrollY;
  let scrollMax = height.scrollHeight - screen.height;
  topBtn.style.opacity = scrollPosition/scrollMax;
})