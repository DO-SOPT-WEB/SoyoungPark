document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.length == 1) {
    displayModalCategory();
  }
});

function displayModalCategory() {
  const spend = document.getElementById('spend_category');
  const income = document.getElementById('income_category');
  const category_list = JSON.parse(localStorage.getItem('categoryList'));
  spend.innerHTML = '';
  income.innerHTML = '';

  category_list.map((item) => {
    const option = document.createElement('option');
    option.textContent = item.name;
    if (item.type == 'income') {
      income.appendChild(option);
    } else {
      spend.appendChild(option);
    }
  });
}
