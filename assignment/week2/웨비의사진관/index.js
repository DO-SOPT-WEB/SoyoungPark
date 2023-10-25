
const topBtn = document.getElementById("top_btn");
const height = document.querySelector("body");
document.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  let scrollMax = height.scrollHeight - screen.height;
  topBtn.style.opacity = scrollPosition/scrollMax;
});

document.addEventListener("DOMContentLoaded", () => {
  createButton();
});

function createButton(){
  const hover_content = document.querySelectorAll(".hover_content");
  const hover_info = document.querySelector(".hover_info");

  hover_content.forEach((item) =>{
    if(item.innerHTML.length >= 40){
      const more_button = document.createElement("button")
      more_button.className="moreBtn";
      more_button.textContent = "더보기";
      item.parentNode.appendChild(more_button);
    }
  });
}
