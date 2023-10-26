const topBtn = document.getElementById('top_btn');
const height = document.querySelector('body');
document.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  let scrollMax = height.scrollHeight - screen.height;
  topBtn.style.opacity = scrollPosition / scrollMax;
});

document.addEventListener('DOMContentLoaded', () => {
  createButton();
});

function createButton() {
  const hover_content = document.querySelectorAll('.hover_content');
  const hover_info = document.querySelector('.hover_info');

  hover_content.forEach((item) => {
    if (item.innerHTML.length > 75) {
      const more_button = document.createElement('button');
      more_button.className = 'btn';
      more_button.id = 'open';
      more_button.textContent = '더보기';
      more_button.addEventListener('click', (event) => seeMore(event));

      item.parentNode.appendChild(more_button);
    }
  });
}

function seeMore(e) {
  e.target.parentNode.querySelector('.hover_content').style.display = 'flex';
  e.target.style.display = 'none';
}

function leftScroll(e) {
  const preview_container = document.getElementById('preview_container');
  preview_container.scrollLeft = preview_container.offsetLeft;
}

function rightScroll(e) {
  const preview_container = document.getElementById('preview_container');
  preview_container.scrollLeft = preview_container.scrollWidth;
}
